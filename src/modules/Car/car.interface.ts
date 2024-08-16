import { Model } from "mongoose";

export type ICar = {
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status: "available" | "not-availavle";
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
};

export type CarModel = Model<ICar>;
