const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

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
// @access Private
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        brand: req.body.brand
    });

    newItem.save()
    .then(item => res.json(item));
});

// @route  DELETE api/items
// @desc   Delete An Item
// @access Private
router.delete('/:id', auth, (req, res) => {
    // Find item to delete by ID
    Item.findById(req.params.id)
    // Remove Item from DB
    .then(item => item.remove()
    // Send Success message if success || Not Found if failed
    .then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;