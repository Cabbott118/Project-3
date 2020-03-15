const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

var bodyParser = require('body-parser');

// Item Model
const Item = require('../../models/Item');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

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
        brand: req.body.brand,
        trailer_type: req.body.trailer_type,
        deck_dimensions: req.body.deck_dimensions,
        weight: req.body.weight,
        price: req.body.price,
        added_by: req.body.added_by,
        date: req.body.date
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