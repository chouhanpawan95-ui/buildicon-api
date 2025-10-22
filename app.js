const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const registrationRoutes = require('./routes/registrationRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Base route
app.use('/api/registrations', registrationRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
