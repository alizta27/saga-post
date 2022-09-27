import { fork, all } from 'redux-saga/effects';
import postSaga from './postSaga';
import createSaga from './createSaga';
import editSaga from './editSaga';
import deleteSaga from './deleteSaga';

export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(createSaga),
    fork(editSaga),
    fork(deleteSaga),
  ]);
}
