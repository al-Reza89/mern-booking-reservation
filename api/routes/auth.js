import express from "express";
import { register } from "../controllers/auth.js";
const router = express.Router();

// localhost:8800/api/v1/register
router.post("/register", register);

export default router;
