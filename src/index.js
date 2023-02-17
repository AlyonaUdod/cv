import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import App from 'App';
import 'antd/dist/reset.css';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/cv'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
