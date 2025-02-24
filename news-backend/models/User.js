import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  subscriptions: [String],
});

export default mongoose.model("User", UserSchema);
