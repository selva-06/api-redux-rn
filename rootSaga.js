// rootSaga.js
import {all} from 'redux-saga/effects';
import {watchFetchData, watchDeleteData} from './saga/cryptoSaga';
export default function* rootSaga() {
  yield all([
    watchFetchData(),
    // Add more sagas if you have any
  ]);
  console.log('hi');
}
