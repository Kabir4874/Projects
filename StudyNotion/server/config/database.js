require("dotenv").config();
const mongoose = require("mongoose");

exports.connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((err) => {
      console.log("DB Connection Failed");
      console.error(err);
      process.exit(1);
    });
};
