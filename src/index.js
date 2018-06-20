import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/fonts.css';
import './assets/css/index.css';
import 'font-awesome/css/font-awesome.min.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const App = Loadable({
  loader: () => import('./App'),
  loading() {
    return <div></div>
  }
})

ReactDOM.render((
    <App />
), document.getElementById('root'));
// registerServiceWorker();
