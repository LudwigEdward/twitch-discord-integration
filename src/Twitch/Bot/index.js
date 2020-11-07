const TwitchJs = require('twitch-js').default
const onAuthenticationFailure = require("./Config/tokenRefresh")

const token = process.env.TWITCH_BOT_TOKEN
const username = process.env.TWITCH_BOT_USERNAME
console.log(token, username)
const twitchJs = new TwitchJs({ username, token, onAuthenticationFailure})

module.exports = twitchJs