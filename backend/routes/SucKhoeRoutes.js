const express = require("express");
const router = express.Router();
const {
  createHealthLog,
  getHealthLogs,
  getHealthLogById,
  updateHealthLog,
  deleteHealthLog
} = require("../controllers/SucKhoeController");

const { protect } = require("../middleware/authMiddleware");

router.use(protect);

router.post("/", createHealthLog);
router.get("/", getHealthLogs);
router.get("/:id", getHealthLogById);
router.put("/:id", updateHealthLog);
router.delete("/:id", deleteHealthLog);

module.exports = router;
