import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import "express-async-errors";
import morgan from "morgan";

//routers
import authDoctorRoutes from "./routes/authDoctorRoutes.js";
import authUserRoutes from "./routes/authUserRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
const app = express();
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
dotenv.config();


// routes
app.use("/api/v1/auth", authUserRoutes);
app.use("/api/v1/doctor/auth", authDoctorRoutes);
app.use("/api/v1/doctors", doctorRoutes);
//middleware

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// start server
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
