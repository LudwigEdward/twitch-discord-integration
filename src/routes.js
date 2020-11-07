const express = require('express');
const router = express.Router();
const createVoiceChannel = require('./Discord/Commands/createVoiceChannel')
const chatListener = require('./Twitch/Bot/Listenner/chatListenner')


router.get('/teste1', (req, res) => {
  res.send('teste1')
  createVoiceChannel();
})
router.get('/teste2', (req, res) => {
  res.send('teste2')
  chatListener();
})
  
module.exports = router;

  




