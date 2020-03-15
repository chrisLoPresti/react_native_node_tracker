const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwtSignature = require('../config/keys').jwtSignature;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send({ error: 'You must be logged in' });
  }
  const token = authorization.replace('Bearer ', '');

  jwt.verify(token, jwtSignature, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'You must be logged in' });
    }
    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = { _id: user._id, email: user.email };
    next();
  });
};
