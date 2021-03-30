import { Octokit } from '@octokit/rest';

const { GITHUB_USERNAME } = process.env;

const octokit = new Octokit();

export async function getProfile() {
  return octokit.rest.users.getByUsername({ username: GITHUB_USERNAME! });
}

export async function getRepos() {
  return octokit.rest.repos.listForUser({ username: GITHUB_USERNAME! });
}
