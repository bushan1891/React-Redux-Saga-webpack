import { combineReducers } from "redux"
import {test} from './test_reducer';
import header from '../components/header/reducer';
import counter from '../components/counter/reducer';
export default combineReducers({
	test,
	header:header,
	counter:counter
})
