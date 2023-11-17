const express = require('express');
const cors = require('cors');
const registrationRouter = require('./routes/registrationRoutes');
const app = express();
app.use(express.json());
app.use(cors());

app.use(
  'https://register-backend-vxw4.onrender.com/api/v1/registrations',
  registrationRouter
);

module.exports = app;
