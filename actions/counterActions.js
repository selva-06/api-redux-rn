// cryptoActions.js
export const SET_CRYPTO_DATA = 'SET_CRYPTO_DATA';

export const setCryptoData = data => ({
  type: SET_CRYPTO_DATA,
  payload: data,
});

export const fetchCryptoData = () => ({
  type: SET_CRYPTO_DATA,
});
