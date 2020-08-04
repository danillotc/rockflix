import config from '../config';

const URL_CATEGORIES = `${config.BACKEND_URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const json = await response.json();
        return json;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const json = await response.json();
        return json;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
