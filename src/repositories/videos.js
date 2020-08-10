import config from '../config';

const URL_VIDEOS = `${config.BACKEND_URL}/videos`;

async function create(videoObject) {
  const response = await fetch(`${URL_VIDEOS}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(videoObject),
    });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error('Não foi possível cadastrar os dados');
}

export default {
  create,
};
