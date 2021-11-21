import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'  
import Apps from './Apps'


ReactDOM.render( 
  <>
    <BrowserRouter>
      <Apps/> 
    </BrowserRouter>
  </>,
  document.getElementById('root')
);