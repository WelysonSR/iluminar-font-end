import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestLogin = async (rota: string, body: object) => {
  const { data } = await api.post(rota, body);
  return data;
};

export const requestRegisterUser = async (rota: string, body: object, token: string) => {
  const { data } = await api.post(rota, body, { headers: { 'Authorization': token } });
  return data;
};

export const requestRegisterAddress = async (rota: string, body: object, token: string) => {
  const { data } = await api.post(rota, body, { headers: { 'Authorization': token } });
  return data;
};

export const requestUsers = async (token: string) => {
  const { data } = await api.get('/user/users', { headers: { 'Authorization': token } });
  return data.message;
};

export const requestUserId = async (rota: string, id: number, token: string) => {
  const url = `${rota}/${id}`;
  const { data } = await api.get(url, { headers: { 'Authorization': token } });
  return data;
};

export const requestUpdate = async (rota: string, id: number, body: object) => {
  const url = `${rota}/${id}`;
  const { data } = await api.patch(url, body);
  return data;
};

export default api;
