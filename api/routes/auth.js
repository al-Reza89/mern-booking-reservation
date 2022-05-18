import express from "express";
const router = express.Router();

// localhost:8800/api/v1
router.get("/", (req, res) => {
  res.send("Hello this is auth");
});

// localhost:8800/api/v1/register
router.get("/register", (req, res) => {
  res.send("Hello this is register");
});

export default router;
