const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const courseRoute = require('./route/courseRoute');
const { connectToDatabase } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 4300;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/course', courseRoute);

// Connect to MongoDB
connectToDatabase();

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
