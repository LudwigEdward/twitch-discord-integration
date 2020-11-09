const express = require('express');
const router = express.Router();
// const createVoiceChannel = require('./bot/Discord/Commands/createVoiceChannel')
const {chatConnection,chat} = require('./bot/Twitch/Bot/Connections/chatConnection')
const {selectedUsersStore,selectedUsersIndex} = require('./app/controller/SelectedUsersController')


router.post('/setSelectedUsers', async (req, res,next) => {
  try{
    await chatConnection(req.body.channel);
    chat.on('*', async (msg) => {
      await selectedUsersStore({name:msg.username},res);
    })
  }catch(err){
    return Promise.reject('Oops!').catch(err => {
      throw new Error(err);
    });
  }
})

router.post('/stopListenning', async (req,res) =>{
  await chat.removeAllListeners()
  res.json({status:"Contagem de Usuários Finalizada"})
})

router.get('/getAllUsers', async (req, res) => {
  await selectedUsersIndex(req, res);
})
  
module.exports = router;

  




