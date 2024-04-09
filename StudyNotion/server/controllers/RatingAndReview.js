const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");

// !createRating
exports.createRating = async (req, res) => {
  try {
    // get user id
    // check if user is enrolled or not
    // check if user already reviewed the course
    // create rating and review
    // update course
    // return response
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// !getAverageRating

// !getAllRating
