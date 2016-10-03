import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Test from './components/TestContainer/test'
   export default (
		<Route path="/" component ={App}>
			<Route path="/test" component={Test} />
		</Route>
		)
 