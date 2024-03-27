import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import registerRoutes from "./routes/register.js";

const app = express();

app.use(cors({
  origin: "https://vercel-app-client-ten.vercel.app",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.options("*", cors()); // Enable preflight requests for all routes

app.use("/api/register", registerRoutes);

app.listen(8801, () => {
  console.log("API is running on port 8801");
});
