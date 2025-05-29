const express = require('express');
const bodyParser = require('body-parser');
const smsHandler = require('./smsHandler');

const app = express();

// Body parser middleware for form-urlencoded data (Africa's Talking sends POST as form-urlencoded)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Incoming SMS webhook endpoint for Africa's Talking
app.post('/incoming-sms', smsHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`AgriBot server running on port ${PORT}`));
