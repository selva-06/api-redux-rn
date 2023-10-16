// // cryptoReducer.js
// import {SET_CRYPTO_DATA, REMOVE_CRYPTO_ITEM} from '../actions/counterActions';
// const initialState = {
//   cryptoData: [],
//   refreshing: false,
// };

// const cryptoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_CRYPTO_DATA:
//       return {
//         ...state,
//         cryptoData: action.payload,
//         refreshing: false,
//       };
//     case REMOVE_CRYPTO_ITEM:
//       const updatedCryptoData = state.cryptoData.filter(
//         item => item.id !== action.payload,
//       );
//       return {
//         ...state,
//         cryptoData: updatedCryptoData,
//       };
//     default:
//       return state;
//   }
// };

// export default cryptoReducer;
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  REMOVE_CRYPTO_ITEM,
} from '../actions/counterActions';

const initialState = {
  data: [],
  error: null,
  refreshing: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    case REMOVE_CRYPTO_ITEM:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
