import {HEADER_LOAD,HEADER_LOAD_COMPLETE} from './types';
import {createAction} from'redux-actions';
import { take, call, select, fork, put } from 'redux-saga/effects';
export function* callHeaderLoad(action){
console.log("********Header Saga recived 'HEADER_LOAD' action **********");

//create new action now 
 yield put(createAction(HEADER_LOAD_COMPLETE)());

}

export function* watchHeaderLoad() {
  while(true) {
    const action = yield take(HEADER_LOAD);
    yield call(callHeaderLoad,action);
  }
}

export function* Header() {
  yield fork(watchHeaderLoad);
}

export default [
  Header,
];