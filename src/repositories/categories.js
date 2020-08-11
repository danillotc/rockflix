import config from '../config';

const URL_CATEGORIES = `${config.BACKEND_URL}/categorias`;

// READ
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

// CREATE
async function create(categoryObject) {
  const response = await fetch(`${URL_CATEGORIES}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(categoryObject),
    });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error('Não foi possível cadastrar uma nova categoria');
}

// DELETE
async function destroy(categoryId) {
  const response = await fetch(`${URL_CATEGORIES}/${categoryId}`,
    {
      method: 'DELETE',
    });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error(`Não foi possível deletar a categoria. Status ${response.status}`);
}

export default {
  getAllWithVideos,
  getAll,
  create,
  destroy,
};
