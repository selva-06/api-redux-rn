// store.js
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import cryptoReducer from './reducers/counterReducer';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(cryptoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
