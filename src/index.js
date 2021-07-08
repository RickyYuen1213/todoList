import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import TaskContextProvider from 'hooks/task/TaskProvider';
import { initDB } from 'react-indexed-db';
import { DBConfig, checkIndexedDBExist, checkDbExist } from 'db/indexeddb'

let isStoreExist
if (checkIndexedDBExist()) {
  isStoreExist = checkDbExist('matterhornDB')
  initDB(DBConfig)
}
export const isStoreExisting = isStoreExist

ReactDOM.render(
  <TaskContextProvider>
    <Home />
  </TaskContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
