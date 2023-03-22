import express from "express"
import mongoose from "mongoose"
import router from "./routers/router";

const app = express();
app.use(express.json());
app.use(router);


mongoose.connect("mongodb://127.0.0.1:27017/assigment").then(() => console.log("Mongoose running....")).catch(() => console.log("Running fell...."));

export const viteNodeApp = app;