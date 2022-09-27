import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getPostSuccess,
  getPostFailure,
  detailPostSuccess,
} from '../reducers/postReducer';
import axios from 'axios';

function* handleFetchPost(args) {
  try {
    const { payload } = args;

    const posts = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/posts/${payload.id}`)
    );

    if (payload.type === 'detail') {
      yield put(detailPostSuccess(posts.data));
    } else {
      yield put(getPostSuccess(posts.data));
    }
  } catch (error) {
    yield put(getPostFailure(error));
  }
}

export default function* postSaga() {
  yield takeEvery('posts/getPostFetch', handleFetchPost);
}
