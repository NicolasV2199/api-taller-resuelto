// import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles.css';
import { ApiApp } from './ApiApp.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <ApiApp />
    {/*</React.StrictMode>,*/}
  </BrowserRouter>
)
