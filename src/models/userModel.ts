import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username Must be Required"],
  },
  email: {
    type: String,
    required: [true, "Email Must be Required"],
  },
  password: {
    type: String,
    required: [true, "Password Must be Required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpiry: Date,
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
