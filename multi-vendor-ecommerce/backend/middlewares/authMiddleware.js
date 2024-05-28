const jwt = require("jsonwebtoken");
const { responseReturn } = require("../utils/response");

module.exports.authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    // if don't have access token
    responseReturn(res, 409, { error: "Please Login First" });
  } else {
    // if have access token
    try {
      // decode token
      const decodeToken = await jwt.verify(accessToken, process.env.SECRET);
      req.role = decodeToken.role;
      req.id = decodeToken.id;
      next();
    } catch (error) {
      responseReturn(res, 500, { error: "Please Login First" });
    }
  }
};
