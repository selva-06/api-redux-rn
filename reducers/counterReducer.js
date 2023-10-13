// cryptoReducer.js
import {SET_CRYPTO_DATA} from '../actions/counterActions';
const initialState = {
  cryptoData: [],
  refreshing: true,
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CRYPTO_DATA:
      return {
        ...state,
        cryptoData: action.payload,
        refreshing: false,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
