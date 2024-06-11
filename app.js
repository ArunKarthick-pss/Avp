const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to database
connectDB();

// Routes
app.use('/api', productRoutes);

module.exports = app;
