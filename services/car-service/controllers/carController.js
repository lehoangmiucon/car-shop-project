const Car = require('../models/Car');

// Lấy tất cả xe
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy chi tiết 1 xe
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (!car) return res.status(404).json({ message: 'Car not found' });
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tạo xe mới
exports.createCar = async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật xe
exports.updateCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (!car) return res.status(404).json({ message: 'Car not found' });
        
        await car.update(req.body);
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Xóa xe
exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (!car) return res.status(404).json({ message: 'Car not found' });
        
        await car.destroy();
        res.json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};