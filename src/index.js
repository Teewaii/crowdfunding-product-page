import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Modal from './components/Modal/Modal';
import reportWebVitals from './reportWebVitals';
import Pledge from './components/Pledges/Pledge';
import Submit from './components/SubmitMessage/Submit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Pledge  />
    {/* <Submit /> */}
    <Modal />
  </React.StrictMode>
);


