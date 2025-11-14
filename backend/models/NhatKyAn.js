const mongoose = require("mongoose");

const feedingLogSchema = new mongoose.Schema({
  tankId: { type: mongoose.Schema.Types.ObjectId, ref: "Tank", required: true },
  feedType: { type: String, required: [true, "Loại thức ăn không được để trống"] },
  quantity: { type: Number, required: [true, "Số lượng không được để trống"] },
  feedingTime: { 
    type: Date, 
    default: Date.now
  },
  notes: { type: String, trim: true }
}, { timestamps: true });

module.exports = mongoose.model("FeedingLog", feedingLogSchema);
