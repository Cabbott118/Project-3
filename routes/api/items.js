const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const bodyParser = require('body-parser');
const { json } = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get All Items
// @access Public
router.get('/', (req, res) => {
  // Get items and sort
  Item.find()
    .sort({ trailer_type: 1 })
    .then((items) => res.json(items));
});

// @route  GET api/items
// @desc   Get Filtered Items
// @access Public
router.get('/:item_location', (req, res) => {
  // Get items and sort
  Item.find(req.params)
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route  POST api/items
// @desc   Create An Item
// @access Private
router.post('/', auth, (req, res) => {
  const {
    brand,
    trailer_type,
    deck_dimensions,
    weight,
    price,
    item_location,
  } = req.body;

  if (
    !brand ||
    !trailer_type ||
    !deck_dimensions ||
    !weight ||
    !price ||
    !item_location
  ) {
    return res.status(400).json({ msg: 'Please complete all fields' });
  }

  const newItem = new Item({
    brand,
    trailer_type,
    deck_dimensions,
    weight,
    price,
    added_by: req.body.added_by,
    added_by_fname: req.body.added_by_fname,
    added_by_lname: req.body.added_by_lname,
    item_location,
    date: req.body.date,
  });
  newItem.save().then((item) => res.json(item));
});

// @route  PUT api/items
// @desc   Edit An Item
// @access Private
router.put('/:_id', auth, (req, res) => {
  //this returns a promise
  Item.findByIdAndUpdate(
    req.params._id,
    req.body,
    { new: false, useFindAndModify: false },
    () => {}
  )
    .then((updatedItem) => {
      res.json(updatedItem); //we capture this via our promise-handler on the action
    })
    .catch((error) => {
      return res.status(400).json({ couldnotupdate: 'could not update item' });
    });
});

// @route  DELETE api/items
// @desc   Delete An Item
// @access Private
router.delete('/:id', auth, (req, res) => {
  // Find item to delete by ID
  Item.findById(req.params.id)
    // Remove Item from DB
    .then((item) =>
      item
        .remove()
        // Send Success message if success || Not Found if failed
        .then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
