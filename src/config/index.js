const BACKEND_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://rockflix-backend.herokuapp.com';

export default {
  BACKEND_URL,
};
