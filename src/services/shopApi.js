const WINES_URL = 'https://wine-back-test.herokuapp.com/products';
const CLUB_URL = 'https://wine-club-proxy.herokuapp.com/modalities';

export const getAllWines = async () => {
  const response = await fetch(WINES_URL);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const getClub = async () => {
  const response = await fetch(CLUB_URL);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
