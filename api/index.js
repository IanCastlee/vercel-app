import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import registerRoutes from "./routes/register.js"; 
import postRoutes from "./routes/posts.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
    credentials: true // Pahintulutan ang pagpapadala ng cookies mula sa frontend
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/register", registerRoutes);
app.use("/api/posts", postRoutes);

app.listen(8801, () => {
  console.log("API gumagana sa 8801");
});
