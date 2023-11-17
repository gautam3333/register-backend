const express = require('express');
const cors = require('cors');
const registrationRouter = require('./routes/registrationRoutes');
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/registrations', registrationRouter);

module.exports = app;
