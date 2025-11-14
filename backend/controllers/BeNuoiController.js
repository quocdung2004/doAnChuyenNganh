const Tank = require("../models/BeNuoi");

// Tạo bể mới
exports.createTank = async (req, res) => {
  try {
    const { name, type, size, location } = req.body;
    const tank = await Tank.create({ name, type, size, location });
    res.status(201).json(tank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy danh sách tất cả bể
exports.getTanks = async (req, res) => {
  try {
    const tanks = await Tank.find();
    res.json(tanks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin 1 bể theo ID
exports.getTankById = async (req, res) => {
  try {
    const tank = await Tank.findById(req.params.id);
    if (!tank) return res.status(404).json({ message: "Bể không tồn tại" });
    res.json(tank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật bể
exports.updateTank = async (req, res) => {
  try {
    const tank = await Tank.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!tank) return res.status(404).json({ message: "Bể không tồn tại" });
    res.json(tank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa bể
exports.deleteTank = async (req, res) => {
  try {
    const tank = await Tank.findByIdAndDelete(req.params.id);
    if (!tank) return res.status(404).json({ message: "Bể không tồn tại" });
    res.json({ message: "Xóa bể thành công" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
