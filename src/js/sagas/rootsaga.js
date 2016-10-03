import { take, call, select, fork, put } from 'redux-saga/effects';
import { createAction } from 'redux-actions';


export function* fetchPosts(action) {
	console.log('Saga caught test' ,action);
}


export function* fetchPostsWatcher() {
  while(true) {
    const action = yield take('TEST');
    yield call(fetchPosts,action);
  }
}


export function* Hello() {
  yield fork(fetchPostsWatcher);
  //yield fork(postCommentWatcher);
}


export default [
  Hello,
];