const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const uploadRouter = require('./routes/upload');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Use the upload router
app.use('/api/upload', uploadRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
