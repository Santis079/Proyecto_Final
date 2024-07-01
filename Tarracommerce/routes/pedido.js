const express = require('express');
const router = express.Router();
const Order = require('../models/pedido');

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('products');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new order
router.post('/', async (req, res) => {
    const order = new Order({
        user: req.body.user,
        products: req.body.products,
        total: req.body.total,
        status: req.body.status,
    });
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
