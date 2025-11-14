const express = require("express");
const router = express.Router();
const {
  createFeedingLog,
  getFeedingLogs,
  getFeedingLogById,
  updateFeedingLog,
  deleteFeedingLog
} = require("../controllers/NhatKyAnController");

const { protect } = require("../middleware/authMiddleware");

router.use(protect);

router.post("/", createFeedingLog);
router.get("/", getFeedingLogs);
router.get("/:id", getFeedingLogById);
router.put("/:id", updateFeedingLog);
router.delete("/:id", deleteFeedingLog);

module.exports = router;
