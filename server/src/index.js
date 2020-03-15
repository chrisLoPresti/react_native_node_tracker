//models
require('./models/User');
require('./models/Track');
//setup
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//routes
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
//config
const mongoUri = require('../src/config/keys').mongoUri;
//app setup
app.use(bodyParser.json());
//routes
app.use(authRoutes);
app.use(trackRoutes);

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log('listening on port 3000');
});
