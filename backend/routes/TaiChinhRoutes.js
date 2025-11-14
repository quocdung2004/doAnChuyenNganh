const express = require("express");
const router = express.Router();
const {
  createCostRevenue,
  getCostRevenues,
  getCostRevenueById,
  updateCostRevenue,
  deleteCostRevenue
} = require("../controllers/TaiChinhController");

const { protect } = require("../middleware/authMiddleware");

router.use(protect);

router.post("/", createCostRevenue);
router.get("/", getCostRevenues);
router.get("/:id", getCostRevenueById);
router.put("/:id", updateCostRevenue);
router.delete("/:id", deleteCostRevenue);

module.exports = router;
