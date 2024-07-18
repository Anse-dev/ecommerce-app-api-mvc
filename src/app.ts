import express from "express";
import dotenv from 'dotenv';
import ProductRouter from "./routes/productRoutes";
import connectedDb from "./config/db";
dotenv.config()
const app = express();
connectedDb()
app.use(express.json());

app.use("/api/v1/product", ProductRouter)

export default app;