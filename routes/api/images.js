const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const bodyParser = require('body-parser');
const { json } = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Image Model
const Image = require('../../models/Image');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage }).single('image');

router.post('/', upload, (req, res) => {
  const newImage = new Image({
    fieldname: req.file.fieldname,
    originalname: req.file.originalname,
    encoding: req.file.encoding,
    mimetype: req.file.mimetype,
    destination: req.file.destination,
    filename: req.file.filename,
    path: req.file.path,
    size: req.file.size,
  });
  newImage.save().then((image) => res.json(image));
});

router.get('/:id', (req, res) => {
  Image.findById(req.params.id)
    .then((item) => {
      res.json(item);
      const filepath = item.path;
      console.log(filepath);
    })
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
