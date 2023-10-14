// cryptoReducer.js
import {SET_CRYPTO_DATA, DELETE_CRYPTO_ITEM} from '../actions/counterActions';
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
    case DELETE_CRYPTO_ITEM:
      const updatedData = state.cryptoData.filter(
        item => item.id !== action.payload,
      );
      return {
        ...state,
        cryptoData: updatedData,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
