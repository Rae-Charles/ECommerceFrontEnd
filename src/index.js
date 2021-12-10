import React  from 'react';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import reactDom from 'react-dom';




reactDom.render(
  <Router>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
    
);