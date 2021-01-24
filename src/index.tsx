import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import App from './App';
import counterReducer, { initialState } from './reducer';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

import './index.css';

// Redux Persistの設定
const persistConfig = {
  key: 'root',
  storage,
};

// パーシストレデューサーの作成
const persistedReducer = persistReducer(persistConfig, counterReducer);

// ストア、パーシスターの作成
const store = createStore(persistedReducer, initialState);
const pstore = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading="" persistor={pstore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
