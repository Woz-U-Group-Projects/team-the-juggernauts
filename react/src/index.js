import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Topics from './screens/Topics';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const Index = ({ pathname }) => {
    switch (pathname) {
      case '/about':
        return <About />;
      case '/topics':
        return <Topics />;
      default:
        return <Home />;
    }
  };
  
  let pathname = window.location.pathname;
  
  ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));
  
  window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
  });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
