export const BASE_URL = 'https://api.mestozakharova.nomoredomains.icu';

const request = ({ url, method = 'POST', token, data }) => {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(!!token && { 'Authorization': `Bearer ${token}` }),
    },
    ...(!!data && { body: JSON.stringify(data) }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};

//отклоняю промис, если с сервера приходит ошибка в request

export const register = (email, password) => {
  return request({
    url: '/signup',
    data: { email, password },
  });
};

export const authorize = (email, password) => {
  return request({
    url: '/signin',
    data: { email, password },
  });
};

export const getContent = (token) => {
  return request({
    url: '/users/me',
    method: 'GET',
    token,
  });
};
