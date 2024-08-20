import { Model } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  role: "user" | "admin";
  password: string;
  phone: string;
  address: string;
};

export type UserModel = Model<IUser>;
