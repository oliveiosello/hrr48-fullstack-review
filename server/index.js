var express = require('express');
var bodyParser = require('body-parser');
var helper = require('../helpers/github.js');
var database = require('../database');
var app = express();
var _ = require("lodash");

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('REQUEST', req.body);
  helper
    .getReposByUsername(req.body.username)
    .then((repos) =>
    database.save(repos));
  // use github helper
  // chain by saving users to db

  // handles search from client index reqs info from github api
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // makes request
  database.getAll()
    .then((repos) =>
    res.json(_.uniqBy(repos, r => r.id)));
  // res.json(...)
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
