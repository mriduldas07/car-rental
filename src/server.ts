/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

process.on("uncaughtException", (error) => {
  console.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(
      `mongodb+srv://mriduldas0325:QyVlC00d2WNNkgFv@cluster0.72uip.mongodb.net/car-rental?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log(`🛢   Database is connected successfully`);

    server = app.listen(8000, () => {
      console.log(`Application  listening on port 8000`);
    });
  } catch (err) {
    console.error("Failed to connect database", err);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is received');
//   if (server) {
//     server.close();
//   }
// });
