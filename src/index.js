import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Modal from './components/Modal/Modal';
import reportWebVitals from './reportWebVitals';
import Pledge from './components/Pledges/Pledge';
import Submit from './components/SubmitMessage/Submit';
import ModalCard from './components/Modal/Modal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Pledge  /> */}
    {/* <Submit /> */}
    <ModalCard />
  </React.StrictMode>
);


