const client = require('../index')
module.exports = () =>{
  const arrayChannels = [...client.channels.cache]
  arrayChannels.map(item =>{
    client.channels.cache.get(`${item[0]}`).delete().then(response => {
      console.log(`deleted: ${response}`)
    })
  }) 
}