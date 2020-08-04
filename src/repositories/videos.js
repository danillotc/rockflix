import config from '../config';

const URL_VIDEOS = `${config.BACKEND_URL}/videos`;

function create(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(videoObject),
    })
    .then(async (response) => {
      if (response.ok) {
        const json = await response.json();
        return json;
      }
      throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
  create,
};
