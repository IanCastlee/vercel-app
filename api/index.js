
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import registerRoutes from "./routes/register.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true // Allow sending cookies from frontend
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/register", registerRoutes);

app.listen(8801, () => {
  console.log("API working in 8801");
});
