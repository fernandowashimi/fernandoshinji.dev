import axios from 'axios';

const local = axios.create({
  baseURL: 'https://fernandoshinji.dev',
});

export async function getDefaultProfile() {
  return local.get('/default/profile.json');
}

export async function getDisplayableRepos() {
  return local.get('/default/repos.json');
}
