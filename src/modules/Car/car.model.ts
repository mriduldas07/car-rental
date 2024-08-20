import { model, Schema } from "mongoose";
import { CarModel, ICar } from "./car.interface";

const carSchema = new Schema<ICar>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  isElectric: {
    type: Boolean,
    required: true,
  },
  status: {
    enum: ["available", "not-availavle"],
    required: true,
  },
  features: [
    {
      type: String,
      required: true,
    },
  ],
  pricePerHour: {
    type: Number,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
  },
});

export const Car = model<ICar, CarModel>("Car", carSchema);
