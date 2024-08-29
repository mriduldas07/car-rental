import { ICar } from "./car.interface";
import { Car } from "./car.model";

const createCar = async (payload: ICar): Promise<ICar> => {
  const result = await Car.create(payload);
  return result;
};

export const CarServices = {
  createCar,
};
