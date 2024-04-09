const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const {
  courseEnrollmentEmail,
} = require("../mail/templates/courseEnrollmentEmail");
const mongoose = require("mongoose");

// !capture the payment and initiate razorpay order
exports.capturePayment = async (req, res) => {
  try {
    // get courseId & userId
    const { course_id } = req.body;
    const userId = req.user.id;

    // valid courseId & courseDetail
    if (!course_id) {
      return res.json({
        success: false,
        message: "please provide valid course ID",
      });
    }
    let course;
    try {
      course = await Course.findById(course_id);
      if (!course) {
        return res.json({
          success: false,
          message: "Could not find the course",
        });
      }

      // user already pay for the same course
      const uid = new mongoose.Types.ObjectId(userId);
      if (course.studentsEnrolled.includes(uid)) {
        return res.status(200).json({
          success: false,
          message: "student is already enrolled",
        });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    // order create
    const amount = course.price;
    const currency = "INR";
    const options = {
      amount: amount * 100,
      currency,
      receipt: Math.random(Date.now()).toString(),
      notes: {
        courseId: course_id,
        userId,
      },
    };
    try {
      // initiate the payment using razorpay
      const paymentResponse = await instance.orders.create(options);
      console.log(paymentResponse);
      return res.status(200).json({
        success: true,
        courseName: course.courseName,
        courseDescription: course.courseDescription,
        thumbnail: course.thumbnail,
        orderId: paymentResponse.id,
        currency: paymentResponse.currency,
        amount: paymentResponse.amount,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// !verify signature of razorpay and server
exports.verifySignature = async (req, res) => {
  const webHookSecret = "12345678";
  const signature = req.headers["x-razorpay-signature"];
  const shasum = crypto.createHmac("sha256", webHookSecret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");
  if (signature === digest) {
    console.log("Payment is Authorized");
    const { courseId, userId } = req.body.payload.payment.entity.notes;
    try {
      // fulfil the action
      // find the course and enroll the student in it
      const enrolledCourse = await Course.findOneAndUpdate(
        { _id: courseId },
        { $push: { studentsEnrolled: userId } },
        { new: true }
      );
      if (!enrolledCourse) {
        return res.status(500).json({
          success: false,
          message: "Course not found",
        });
      }
      console.log(enrolledCourse);

      // find the student and add the course to their list of enrolled course
      const enrolledStudent = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { courses: courseId } },
        { new: true }
      );
      console.log(enrolledCourse);

      // send confirmation mail
      const emailResponse = await mailSender(
        enrolledStudent.email,
        "Congratulation from StudyNotion",
        "Congratulation, you are onboard into new StudyNotion Course"
      );
      console.log(emailResponse);
      return res.status(200).json({
        success: true,
        message: "Signature verified and Course added successfully",
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
};
