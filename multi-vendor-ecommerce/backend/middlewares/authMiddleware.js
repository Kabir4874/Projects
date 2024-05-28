const jwt= require('jsonwebtoken');
const { responseReturn } = require("../utils/response");

module.exports.authMiddleware= async(req,res,next)=>{
    const {accessToken} = req.cookies;
    if(!accessToken){
        // if don't have access token
        responseReturn(res,409,{error:'Please Login First'});
    }else{
        // if have access token
        const 
    }
}