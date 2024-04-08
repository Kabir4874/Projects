const Course= require('../models/Course');
const Tag= require('../models/Tag');
const User= require('../models/User');
const {uploadImageToCloudinary}= require('../utils/imageUploader');

// !createCourse handler function 
exports.createCourse= async(req,res)=>{
    try{
        
    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message,
          });
    }
}



// !getAllCourses handler function 