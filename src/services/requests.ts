import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestLogin = async (rota: string, body: object) => {
  const { data } = await api.post(rota, body);
  return data;
};

export const requestRegister = async (rota: string, body: object) => {
  const { data } = await api.post(rota, body);
  return data;
};

export const requestUsers = async (token: string) => {
  const { data } = await api.get('/user/users',{
    headers: {
      'Authorization': token
    }
  });
  return data.message;
};

export const getData = async (rota: string) => {
  const { data } = await api.get(rota);
  return data;
};

export const requestDetails = async (rota: string, id: number) => {
  const url = `${rota}/${id}`;
  const { data } = await api.get(url);
  return data;
};

export const requestUpdate = async (rota: string, id: number, body: object) => {
  const url = `${rota}/${id}`;
  const { data } = await api.patch(url, body);
  return data;
};

export default api;
