import express from "express"
import { config } from "dotenv";
import UserRouter from "./routes/user.js";
export const app = express();
import cors from "cors";

config({
    path: "./data/config.env"
})

//using middlewares  
app.use(express.json())
app.use(cors());
//importing Routes
app.use("/api/v1/users", UserRouter);
