const Profile = require("../models/Profile");
const User = require("../models/User");

// !update profile
exports.updateProfile = async (req, res) => {
  try {
    // get data
    const { dateOfBirth = "", about = "", contactNumber, gender } = req.body;
    const id = req.user.id;

    // validation
    if (!contactNumber || !gender || !id) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // find & update profile
    const userDetails = await User.findById(id);
    const profileId = userDetails.additionalDetails;
    const profileDetails = await Profile.findById(profileId);

    profileDetails.dateOfBirth = dateOfBirth;
    profileDetails.about = about;
    profileDetails.gender = gender;
    profileDetails.contactNumber = contactNumber;
    await profileDetails.save();

    // return response
    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      profileDetails,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// delete Account
exports.deleteAccount = async (req, res) => {
  try {
    // get id
    const id = req.user.id;

    // validation
    const userDetails = await User.findById(id);
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // delete profile
    await Profile.findByIdAndDelete({ _id: userDetails.additionalDetails });

    // delete user
    await User.findByIdAndDelete({ _id: id });
    // return response
    return res.status(200).json({
      success: true,
      message: "Profile Deleted successfully",
      profileDetails,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// get all user details
exports.getAllUserDetails = async (req, res) => {
  try {
    // get id
    const id = req.user.id;

    // validation and ger user details
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();

    // return responses
    return res.status(200).json({
      success: true,
      message: "User Data Fetched successfully",
      profileDetails,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
