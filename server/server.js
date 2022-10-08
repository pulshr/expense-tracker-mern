import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

await mongoose.connect(
  "mongodb+srv://pulkit:pulkit@cluster0.rxyhiga.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDB connection is successful");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/transaction", (req, res) => {
  const { amount, description, date } = req.body;
  res.json({ message: "Hello World" });
});


app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});