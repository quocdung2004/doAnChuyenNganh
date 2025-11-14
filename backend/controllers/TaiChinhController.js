const CostRevenue = require("../models/TaiChinh");

// Tạo record
exports.createCostRevenue = async (req, res) => {
  try {
    const { tankId, type, amount, description } = req.body;
    const record = await CostRevenue.create({ tankId, type, amount, description });
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả
exports.getCostRevenues = async (req, res) => {
  try {
    const records = await CostRevenue.find().populate("tankId", "name type");
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy theo ID
exports.getCostRevenueById = async (req, res) => {
  try {
    const record = await CostRevenue.findById(req.params.id).populate("tankId", "name type");
    if (!record) return res.status(404).json({ message: "Record không tồn tại" });
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật
exports.updateCostRevenue = async (req, res) => {
  try {
    const record = await CostRevenue.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!record) return res.status(404).json({ message: "Record không tồn tại" });
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa
exports.deleteCostRevenue = async (req, res) => {
  try {
    const record = await CostRevenue.findByIdAndDelete(req.params.id);
    if (!record) return res.status(404).json({ message: "Record không tồn tại" });
    res.json({ message: "Xóa record thành công" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
