const HealthLog = require("../models/SucKhoe");

// Tạo health log
exports.createHealthLog = async (req, res) => {
  try {
    const { tankId, disease, medicine, survivalRate, notes } = req.body;
    const log = await HealthLog.create({ tankId, disease, medicine, survivalRate, notes });
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả health logs
exports.getHealthLogs = async (req, res) => {
  try {
    const logs = await HealthLog.find().populate("tankId", "name type");
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy health log theo ID
exports.getHealthLogById = async (req, res) => {
  try {
    const log = await HealthLog.findById(req.params.id).populate("tankId", "name type");
    if (!log) return res.status(404).json({ message: "Health log không tồn tại" });
    res.json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật health log
exports.updateHealthLog = async (req, res) => {
  try {
    const log = await HealthLog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!log) return res.status(404).json({ message: "Health log không tồn tại" });
    res.json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa health log
exports.deleteHealthLog = async (req, res) => {
  try {
    const log = await HealthLog.findByIdAndDelete(req.params.id);
    if (!log) return res.status(404).json({ message: "Health log không tồn tại" });
    res.json({ message: "Xóa health log thành công" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
