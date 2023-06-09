import express from "express";
import morgan from "morgan";
//Routes
import userRoutes from "./routes/users.router";

const app=express();

//Settings
app.set("port",4000);

//Middlewares
app.use(morgan("dev"));
//Routes
app.use("/api/users",userRoutes);

export default app;
