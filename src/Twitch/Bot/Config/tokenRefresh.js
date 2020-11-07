const fetchUtil = require('twitch-js/lib/utils/fetch') 

const onAuthenticationFailure = () =>
fetchUtil('https://id.twitch.tv/oauth2/token', {
  method: 'post',
  search: {
     grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
  },
}).then(response => response.accessToken)

module.exports = onAuthenticationFailure;