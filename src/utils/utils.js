export const baseUrl = 'http://localhost:8080/api';

export const getUserFromLocalStorage = localStorage.getItem('utilisateur')
  ? JSON.parse(localStorage.getItem('utilisateur'))
  : null;

export const getTokenFromLocalStorage = localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token'))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage : ''
    }`,
    'Content-Type': 'application/json',
  },
};

export const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export const timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' ANNEE';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' MOIS';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' JOUR';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' HEURES';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' MINUTES';
  }
  return Math.floor(interval) + ' SECONDES';
};
