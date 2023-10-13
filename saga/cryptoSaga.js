// cryptoSaga.js
import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {SET_CRYPTO_DATA, setCryptoData} from '../actions/counterActions';
function* fetchDataSaga() {
  try {
    const response = yield call(
      axios.get,
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'inr',
          order: 'name',
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      },
    );
    yield put(setCryptoData(response.data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export function* watchFetchData() {
  yield takeLatest(SET_CRYPTO_DATA, fetchDataSaga);
}
