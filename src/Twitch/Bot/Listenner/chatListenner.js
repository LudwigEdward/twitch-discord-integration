const twitchJs = require("../index")

const chatListener = async () =>{
  const {chat} = twitchJs;
  await chat.connect();
  await chat.join("deercheerup");
  return chat.on('*', message => {
    return message
  })
}
  
module.exports = chatListener;
