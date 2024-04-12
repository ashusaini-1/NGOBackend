const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  contact: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;



// const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto");
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     // required: [true, "Enter your Name"],
//   },

//   contact: {
//     type: String,
//     // required: "Enter Your Number",
//     // unique: true,
//   },
//   email: {
//     type: String,
//     // required: [true, "Enter your email"],
//   },
//   password:{
//     type:String,
//   },
//   role: {
//     type: Number,
//     // for admin=2
//     default: 1,
//   },
//   createdAt: { type: Date, default: Date.now },
//   resetPasswordToken: String,
//   resetPasswordExpires: Date,
// });

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("passsword")) next();
//   this.password = await bcrypt.hash(this.password, 10);
// });

// userSchema.method.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// userSchema.method.getResetPasswordToken = function () {
//   const resetToken = crypto.randomBytes(20).toLocaleString("hex");

//   this.resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");

//   this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
//   return resetToken;
// };

// module.exports = mongoose.model("User", userSchema);
