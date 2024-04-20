const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const teacherRoute = require('./route/teacherRoute');
const { connectToDatabase } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 4050;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/teacher', teacherRoute);

// Connect to MongoDB
connectToDatabase();

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
