import React from 'react';

const Repo = ({repo}) => (<div>
  <div>{repo.name}</div>
  <div>{repo.username}</div>
  <div>{repo.stargazers_count}</div>
  <div>{repo.watchers_count}</div>
  <div>{repo.forks_count}</div>
</div>)

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    {repos.map(repo =>
    <Repo key={repo.id} repo={repo} />)}
  </div>
)

export default RepoList;