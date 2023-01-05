import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
//routers
import authRouter from "./routes/authRoutes.js"
import appointmentRouter from "./routes/appointmentsRoutes.js"

const app = express();
app.use(express.json());
dotenv.config();


app.get("/", (req, res) => {
  res.send("Welcome");
});

// routes
app.use('/api/v1/auth/', authRouter)
app.use('/api/v1/appointments',appointmentRouter )
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