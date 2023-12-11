import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
