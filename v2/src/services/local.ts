import axios from 'axios';

const { VERCEL_URL } = process.env;

const local = axios.create({
  baseURL: VERCEL_URL,
});

export async function getDefaultProfile() {
  return local.get('/default/profile.json');
}

export async function getDisplayableRepos() {
  return local.get('/default/repos.json');
}
