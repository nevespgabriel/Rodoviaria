import express from "express";
import trip_controller from "../controllers/trip_controller.js";

const router = express.Router();

router.post("/", trip_controller.store);
router.get("/", trip_controller.index);
router.get("/:id", trip_controller.show);
router.put("/:id", trip_controller.update);
router.delete("/:id", trip_controller.destroy);

export default router;