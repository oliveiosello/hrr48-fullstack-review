const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  return axios.get(`https://api.github.com/users/${username}/repos`,
  {headers: {
    'User-Agent': 'request',
    'Authorization': `token ${config.TOKEN}`
  }})
  .then(res => res.data)

}

module.exports.getReposByUsername = getReposByUsername;

// how to use map to pull out only the desired fields and return