import express from "express";
import {
  getWebinars,
  createWebinar,
  getWebinar,
  deleteWebinar,
  updateWebinar
} from "../controllers/webinarController.js";

const router = express.Router();

// مسیرها
router.get("/", getWebinars);
router.post("/", createWebinar);
router.get("/:id", getWebinar);
router.put("/:id", updateWebinar);
router.delete("/:id", deleteWebinar);

export default router;
