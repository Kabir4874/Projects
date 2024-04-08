const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const {
  courseEnrollmentEmail,
} = require("../mail/templates/courseEnrollmentEmail");

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
    } catch (err) {}
    // user already pay for the same course
    // order create
    // return response
  } catch (err) {}
};
