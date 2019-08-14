import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import Me from './screens/Me';
import Photos from './screens/Photos';
import Public from './screens/Public';
import Friends from './screens/Friends';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(<App />, document.getElementById('root'));

//const Index = ({ pathname }) => {
//   switch (pathname) {
//     case '/me':
//       return <Me />;
//     case '/photos':
//       return <Photos />;
//     case '/public':
//       return <Public />;
//       case '/friends':
//         return <Friends />;  
//     default:
//       return <Home />;
//   }
// };

const Index = ({ pathname }) =>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/me" component={Me} />
      <Route path="/photos" component={Photos} />
      <Route path="/public" component={Public} />
      <Route path="/friends" component={Friends} />
    </div>
  </Router>


let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
