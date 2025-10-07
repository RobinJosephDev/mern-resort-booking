import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/bookings", bookingRoutes);

export default app;
