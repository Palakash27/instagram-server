import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import cors from "cors";
import UserRoutes from "./routes/UserRoutes.js";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

// DB
connectDB();

app.use("/api/user", UserRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = 5001;
app.listen(
    PORT,
    console.log(`Server running on http://localhost:${PORT}`.yellow.bold)
);
