// store.js
import {createStore} from 'redux';
import cryptoReducer from './reducers/counterReducer';
const store = createStore(cryptoReducer);

export default store;
