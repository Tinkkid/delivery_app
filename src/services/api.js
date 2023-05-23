import axios from 'axios';

axios.defaults.baseURL =
  'https://646cc2357b42c06c3b2bf569.mockapi.io/api/delivery';

export async function fetchDishes() {
  const response = await axios('/menu');
  return response.data;
}
