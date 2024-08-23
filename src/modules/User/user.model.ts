import { model, Schema } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  role: {
    enum: ["user", "admin"],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

export const User = model<IUser, UserModel>("User", userSchema);
