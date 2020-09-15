const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  stargazers_count: Number,
  watchers_count: Number,
  forks_count: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

const getAll = () => Repo.find({});

const save = (repos) => {
  for (let repo of repos) {
    var id = repo.id;
    var name = repo.name;
    var username = repo.owner.login;
    var stargazers_count = repo.stargazers_count;
    var watchers_count = repo.watchers_count;
    var forks_count = repo.forks_count;
    assignValues(id, name, username, stargazers_count, watchers_count, forks_count);
  }
};

const assignValues =
(id, name, username, stargazers_count, watchers_count, forks_count) => {
  var addNewRepo = new Repo();
  addNewRepo.id = id;
  addNewRepo.name = name;
  addNewRepo.username = username;
  addNewRepo['stargazers_count'] = stargazers_count;
  addNewRepo['watchers_count'] = watchers_count;
  addNewRepo['forks_count'] = forks_count;

  addNewRepo.save();
};

module.exports.save = save;
module.exports.getAll = getAll;
