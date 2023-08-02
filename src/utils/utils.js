export const baseUrl = 'http://localhost:8080/api';

export const getUserFromLocalStorage = localStorage.getItem('utilisateur')
  ? JSON.parse(localStorage.getItem('utilisateur'))
  : null;

export const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
