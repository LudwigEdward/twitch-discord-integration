const twitchJs = require("../index")
const { chat } = twitchJs;

const chatConnection = async (channel) =>{
  await chat.connect();
  await chat.join(channel);
}
  
module.exports = {chatConnection,chat}
