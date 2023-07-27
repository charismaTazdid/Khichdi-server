import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { } from "dotenv/config";
import bodyParser from "body-parser";
import { authRoute, productsRoute, reviewsRoute, orderRoute } from "./routes/index.js";

const app = express();

app.use(bodyParser.json())
app.use(cors());

app.use('/product', productsRoute);
app.use('/review', reviewsRoute);
app.use('/auth', authRoute);
app.use('/order', orderRoute);

app.get('/', (req, res) => {
    res.send("OH Wow! you are connectd")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Our APP Now running at PORT", PORT)
})
