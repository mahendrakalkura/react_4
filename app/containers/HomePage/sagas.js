import { call, put, select, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { makeSelectEmail } from './selectors';

export function* request() {
  yield call(delay, 2500);
  const email = yield select(makeSelectEmail());
  if (email.indexOf('@') === -1) {
    yield put({
      type: 'RESPONSE_FAILURE',
    });
  } else {
    yield put({
      type: 'RESPONSE_SUCCESS',
      token: '0000000000',
    });
  }
}

export function* root() {
  yield takeEvery('REQUEST', request);
}

export default [root];
