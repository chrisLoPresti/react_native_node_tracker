//setup
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
//model
const User = mongoose.model('User');
//config
const jwtSignature = require('../config/keys').jwtSignature;
//validation
const validateLoginCredentials = require('../validation/login');
const validateSignUpCredentials = require('../validation/SignUp');
//auth token expiration
const expiresIn = 3600000;

router.post('/SignUp', async (req, res) => {
  const { error, isValid } = validateSignUpCredentials(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }

  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, jwtSignature, {
      expiresIn
    });
    res.status(200).send({ token: `Bearer ${token}` });
  } catch (err) {
    return res.status(422).send({
      email: 'That email is already in use'
    });
  }
});

router.post('/SignIn', async (req, res) => {
  const { error, isValid } = validateLoginCredentials(req.body);
  if (!isValid) {
    return res.status(400).json(error);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).send({
      generic: 'Invalid username or password'
    });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, jwtSignature, {
      expiresIn
    });
    res.status(200).send({ token: `Bearer ${token}` });
  } catch (err) {
    return res.status(422).send({
      generic: 'Invalid username or password'
    });
  }
});

module.exports = router;
