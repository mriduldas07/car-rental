import express from "express";
import { CarController } from "./car.controller";

const router = express.Router();

// routes

// create car
router.post("/cars", CarController.createCar);

export const carRouter = router;
