const mongoose = require("mongoose");

const healthLogSchema = new mongoose.Schema({
  tankId: { type: mongoose.Schema.Types.ObjectId, ref: "Tank", required: true },
  disease: { type: String, trim: true },
  medicine: { type: String, trim: true },
  survivalRate: { type: Number, min: 0, max: 100 },
  notes: { type: String, trim: true },
  recordedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("HealthLog", healthLogSchema);
