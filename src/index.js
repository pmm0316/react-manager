import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Life from './pages/demo/Life'
//import Home from './pages/route_demo/route1/home'
import IRouter from './router.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IRouter/>, document.getElementById('root'));
registerServiceWorker();
