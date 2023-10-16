// // cryptoSaga.js
// import {call, put, takeLatest} from 'redux-saga/effects';
// import axios from 'axios';
// import {
//   SET_CRYPTO_DATA,
//   setCryptoData,
//   REMOVE_CRYPTO_ITEM,
// } from '../actions/counterActions';
// import ApiToolKit from '../Api/ApiToolKit';
// import {Alert} from 'react-native';

// function* fetchDataSaga() {
//   try {
//     const response = yield call(ApiToolKit.get, '/coins/markets', {
//       params: {
//         vs_currency: 'inr',
//         order: 'market_cap_desc',
//         per_page: 100,
//         page: 1,
//         sparkline: false,
//       },
//     });
//     yield put(setCryptoData(response.data));
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// function* removeCryptoItem(action) {
//   try {
//     // Perform any additional logic if needed before dispatching the action
//     yield put({type: REMOVE_CRYPTO_ITEM, payload: action.payload});
//   } catch (error) {
//     // Handle any errors
//     console.log('err saga');
//   }
// }
// export function* watchFetchData() {
//   yield takeLatest(SET_CRYPTO_DATA, fetchDataSaga);
// }

// export function* watchRemoveCryptoItem() {
//   yield takeLatest(REMOVE_CRYPTO_ITEM, removeCryptoItem);
// }
import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_DATA,
  fetchDataSuccess,
  fetchDataFailure,
} from '../actions/counterActions';

function* fetchDataSaga() {
  console.log('Saga triggered');
  try {
    const response = yield call(
      axios.get,
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    );
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}
