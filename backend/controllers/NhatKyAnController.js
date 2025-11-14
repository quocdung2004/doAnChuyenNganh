const FeedingLog = require("../models/NhatKyAn");

// Tạo nhật ký mới
exports.createFeedingLog = async (req, res) => {
  try {
    const { tankId, feedType, quantity, notes } = req.body;
    const log = await FeedingLog.create({ tankId, feedType, quantity, notes });
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy danh sách tất cả nhật ký
exports.getFeedingLogs = async (req, res) => {
  try {
    const logs = await FeedingLog.find().populate("tankId", "name type");
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy nhật ký theo ID
exports.getFeedingLogById = async (req, res) => {
  try {
    const log = await FeedingLog.findById(req.params.id).populate("tankId", "name type");
    if (!log) return res.status(404).json({ message: "Nhật ký không tồn tại" });
    res.json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật nhật ký
exports.updateFeedingLog = async (req, res) => {
  try {
    const log = await FeedingLog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!log) return res.status(404).json({ message: "Nhật ký không tồn tại" });
    res.json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa nhật ký
exports.deleteFeedingLog = async (req, res) => {
  try {
    const log = await FeedingLog.findByIdAndDelete(req.params.id);
    if (!log) return res.status(404).json({ message: "Nhật ký không tồn tại" });
    res.json({ message: "Xóa nhật ký thành công" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
