import { combineReducers } from "redux"
import {test} from './test_reducer';
import header from '../components/header/reducer';
export default combineReducers({
	test,
	header:header
})
