// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const uploadRouter = require('./routes/upload');
const morgan = require('morgan'); // Require morgan for logging HTTP requests

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev')); // Use morgan to log HTTP requests

const PORT = process.env.PORT || 5000;

// Connect to MongoDB using the connection string from the .env file
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Define a simple route for the root URL
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Use the upload router for handling file uploads
app.use('/api/upload', uploadRouter);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
