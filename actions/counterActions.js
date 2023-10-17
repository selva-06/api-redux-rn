// // cryptoActions.js
// export const SET_CRYPTO_DATA = 'SET_CRYPTO_DATA';
// export const REMOVE_CRYPTO_ITEM = 'REMOVE_CRYPTO_ITEM';
// export const setCryptoData = data => ({
//   type: SET_CRYPTO_DATA,
//   payload: data,
// });

// export const fetchCryptoData = () => ({
//   type: SET_CRYPTO_DATA,
// });

// export const removeCryptoItem = id => ({
//   type: REMOVE_CRYPTO_ITEM,
//   payload: id,
// });
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
export const REMOVE_CRYPTO_ITEM = 'REMOVE_CRYPTO_ITEM';

export const removeCryptoItem = id => ({
  type: REMOVE_CRYPTO_ITEM,
  payload: id,
});

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});
