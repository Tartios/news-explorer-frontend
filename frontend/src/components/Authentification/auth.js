const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3002'}`;

const checkResponse = (response) => (response.ok ? response.json() : Promise.reject(new Error(`Ошибка: ${response.status}`)));

const register = (name, email, password) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email, password }),
})
  .then(checkResponse);

const authorize = (password, email) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ password, email }),
})
  .then(checkResponse);

const getContent = (jwt) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`,
  },
})
  .then(checkResponse);

export { register, authorize, getContent };
