import express from "express";
import { add } from "../controllers/register.js";

const router = express.Router();

router.post("/", add)
export default router