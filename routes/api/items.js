const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get All Items
// @access Public
router.get('/', (req, res) => {
    // Get items and sort
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route  POST api/items
// @desc   Create An Item
// @access Public
router.post('/', (req, res) => {
    // Construct a new object to send to DB
    const newItem = new Item({
        vin: req.body.vin,
        brand: req.body.brand,
        typeTrailer: req.body.type,
        dimensions: req.body.dimensions,
        weight: req.body.weight
    });
    // Save New Item and send it back as JSON
    newItem.save()
    .then(item => res.json(item));
});

// @route  DELETE api/items
// @desc   Delete An Item
// @access Public
router.delete('/:id', (req, res) => {
    // Find item to delete by ID
    Item.findById(req.params.id)
    // Remove Item from DB
    .then(item => item.remove()
    // Send Success message if success || Not Found if failed
    .then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;