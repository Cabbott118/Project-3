const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const bodyParser = require('body-parser');
const { json } = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

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

router.post('/', upload, (req, res, next) => {
  console.log(req.file);
  res.json(req.file);
});

router.get('/', (req, res) => {});

module.exports = router;
