// cryptoSaga.js
import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  SET_CRYPTO_DATA,
  setCryptoData,
  DELETE_CRYPTO_ITEM,
} from '../actions/counterActions';
import ApiToolKit from '../Api/ApiToolKit';
import {Alert} from 'react-native';

function* fetchDataSaga() {
  try {
    const response = yield call(ApiToolKit.get, '/coins/markets', {
      params: {
        vs_currency: 'inr',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false,
      },
    });
    yield put(setCryptoData(response.data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export function* watchFetchData() {
  yield takeLatest(SET_CRYPTO_DATA, fetchDataSaga);
}
