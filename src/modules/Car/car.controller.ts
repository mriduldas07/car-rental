import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { CarServices } from "./car.services";

const createCar = catchAsync(async (req: Request, res: Response) => {
  const { ...carData } = req.body;
  const result = await CarServices.createCar(carData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Car created successfully",
    data: result,
  });
});

export const CarController = {
  createCar,
};
