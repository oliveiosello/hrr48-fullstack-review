const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (res, req) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  axios.get(`https://api.github.com/users/${username}`,
  {headers: {
    'User-Agent': 'request',
    'Authorization': `token ${config.TOKEN}`
  }})
  .then(res => {
    console.log(res.data)
  })

}

module.exports.getReposByUsername = getReposByUsername;