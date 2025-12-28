import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "username" });

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
