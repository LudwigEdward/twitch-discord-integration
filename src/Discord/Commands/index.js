const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => {
  console.log(`BOT ${client.user.tag} Está Pronto!`);
});

module.exports = client;