const jwt = require("jsonwebtoken");
const { responseReturn } = require("../utils/response");

module.exports.authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    responseReturn(res, 409, { error: "Please Login First" });
  } else {
    try {
      const deCodeToken = jwt.verify(accessToken, process.env.SECRET);
      req.role = deCodeToken.role;
      req.id = deCodeToken.id;
      next();
    } catch (error) {
      responseReturn(res, 409, { error: "Please Login First" });
    }
  } 
};
