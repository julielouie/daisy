import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.querySelector('#root')
);
