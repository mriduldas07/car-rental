import { model, Schema } from "mongoose";

import { BookingModel, IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking>(
  {
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
    totalCost: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = model<IBooking, BookingModel>("Booking", bookingSchema);
