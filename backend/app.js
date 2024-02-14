import express from "express"
import { config } from "dotenv"
import UserRouter from "./routes/user.js"
import path from "path"
export const app = express();
import cors from "cors";

config({
    path: "./data/config.env"
})

//using middlewares

app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.json())
app.use(cors());


// app.set("view engine","ejs");
//importing Routes
app.use("/api/v1/users", UserRouter);
