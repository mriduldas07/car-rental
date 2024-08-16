import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routes
// app.use('/api/v1', router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//global error handler
// app.use(globalErrorHandler);

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not found!!!",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Api not found",
      },
    ],
  });
  next();
});

// const academicSemester = {
//   year: '2025',
//   code: '01',
// };

// const id = async () => {
//   const stuId = await genarateFacultyId();
//   console.log(stuId);
// };

// id();

export default app;
