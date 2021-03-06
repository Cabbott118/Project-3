const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/images', require('./routes/api/images'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Static uploads folder
// Use "path" property stored in Images collection to correctly display image
// src='\uploads\image-1593461437399.png'               <------- EXAMPLE ****
app.use('/uploads', express.static('uploads'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

console.log(`App spinning up...`);
console.log('List of Items in API: http://localhost:5000/api/items');
