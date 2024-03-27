import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import registerRoutes from "./routes/register.js"; 

const app = express();

app.use(cors({
  origin: "https://vercel-app-client-ten.vercel.app",
    credentials: true // Pahintulutan ang pagpapadala ng cookies mula sa frontend
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/register", registerRoutes);

app.listen(8801, () => {
  console.log("API gumagana sa 8801");
});
