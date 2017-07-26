import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, browserHistory } from 'react-router';
import Submit from './components/Submit'
import Home from './components/Home'
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/home" component={Home} />
		<Route path="/submit" component={Submit} />
	</Router>,
	document.getElementById('root'));
registerServiceWorker();
