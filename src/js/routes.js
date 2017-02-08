import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Test from './components/TestContainer/test'
import Test2 from './components/TestContainer/test2'
import Header from './components/header/header';
   export default (
		<Route path="/" component ={App}>
		<Route path="/" component={Header} />
			<Route path="/test" component={Test} >
			<Route path="/test/2" component={Test2} />
			</Route>
		</Route>
		)
 