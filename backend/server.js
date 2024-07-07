import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import cookieParser from "cookie-parser";
import connectToDb from "./config/connect.js";
import authroute from "./routes/auth.route.js";
import contactroute from "./routes/contact.route.js";

dotenv.config();
app.use(cookieParser());
app.use(
  cors({
    origin: "https://naturesavefrontend.vercel.app/",
  })
);
connectToDb();
const port = process.env.PORT || 7000;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "hi" });
});
app.use("/api/v1/auth", authroute);
app.use("/api/v1/contact", contactroute);
app.listen(port, () => {
  console.log(colors.magenta.italic("listening on port"));
});
