const mongoose = require("mongoose");

const costRevenueSchema = new mongoose.Schema({
  tankId: { type: mongoose.Schema.Types.ObjectId, ref: "Tank", required: true },
  type: { type: String, enum: ["cost", "revenue"], required: true },
  amount: { type: Number, required: [true, "Số tiền không được để trống"] },
  description: { type: String, trim: true },
  recordedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("CostRevenue", costRevenueSchema);
