import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppReduxSaga from './AppReduxSaga';
//redux imports:
import { Provider } from 'react-redux';
//import Config Function of App store
import { createAppStore, createAppAsyncStore } from './store/config/storeConfig'

//we create the app Store
let appStore = createAppStore();
let appAsyncStore = createAppAsyncStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appAsyncStore} >
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga/>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
