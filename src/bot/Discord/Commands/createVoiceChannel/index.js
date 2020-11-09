const client = require('../index')
const createVoiceChannel = () =>{
  client.guilds.cache.get(process.env.DISCORD_BOT_CHANNEL_CACHE_ID).channels.create('testeee',{type:'voice'}).then(response => {
    response.createInvite().then(invite =>{
      console.log(invite)
    })
  })
}
  
module.exports = createVoiceChannel;
