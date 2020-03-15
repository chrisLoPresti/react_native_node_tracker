const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();
const Track = mongoose.model('Track');
const validateTrackCredentials = require('../validation/tracks');

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
  try {
    const tracks = await Track.find({ userId: req.user._id });
    res.status(200).send(tracks);
  } catch (err) {
    res.status(422).send({ error: 'Error finding tracks' });
  }
});

router.post('/tracks', async (req, res) => {
  const { error, isValid } = validateTrackCredentials(req.body);
  if (!isValid) {
    return res.status(400).json(error);
  }
  try {
    const { name, locations } = req.body;
    const track = new Track({ name, locations, userId: req.user._id });
    await track.save();
    res.status(200).send(track);
  } catch (err) {
    res.status(422).send({ error: 'Invalid track object' });
  }
});

module.exports = router;
