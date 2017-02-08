import {STOP_COUNTER,START_COUNTER,INCRIMENT} from './types';
import {createAction} from'redux-actions';
import { take, call, select, fork, put } from 'redux-saga/effects';

export const getCounter = (state) =>state.counter;

export function* increment(action){

 //yield put(createAction(INCRIMENT)());
const counter = yield select(getCounter);


}
  
export function* start(action){
//yield put(createAction(INCRIMENT)());
}

export function* end(action){
    
}

export function* watchCounterStart(){
      while(true) {
    const action = yield take('START_COUNTER');
    yield call(start,action);
  }
}
export function* watchCounterStop(){
      while(true) {
    const action = yield take('END_COUNTER');
    yield call(end,action);
  }
}

export function* watchCounterIncriment(){
      while(true) {
    const action = yield take('INCRIMENT');
    yield call(increment,action);
  }
}

export function* Counter() {
  yield fork(watchCounterStart);
  yield fork(watchCounterStop);
  yield fork(watchCounterIncriment);
}

export default [Counter,];