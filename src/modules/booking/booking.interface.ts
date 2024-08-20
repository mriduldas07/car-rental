import { Model, Types } from "mongoose";
import { ICar } from "../Car/car.interface";
import { IUser } from "../User/user.interface";

export type IBooking = {
  date: string;
  user: Types.ObjectId | IUser;
  car: Types.ObjectId | ICar;
  startTime: string;
  endTime: string;
  totalCost: number | 0;
};

export type BookingModel = Model<IBooking>;
