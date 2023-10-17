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
  FETCH_DATA_REQUEST,
} from '../actions/counterActions';

const initialState = {
  data: [],
  error: null,
  refreshing: false,
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        loading: false,
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
