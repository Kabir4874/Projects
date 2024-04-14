const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utils/response");
const bcrypt= require('bcrypt');

class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      if (admin) {
        const match= await bcrypt.compare(password, admin.password);
        console.log(match);
      } else {
        responseReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
}
module.exports = new authControllers();
