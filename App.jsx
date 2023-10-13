// App.js
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import CryptoList from './components/CryptoList';
const App = () => {
  return (
    <Provider store={store}>
      <CryptoList />
    </Provider>
  );
};

export default App;
