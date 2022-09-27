import { call, put, takeEvery } from 'redux-saga/effects';
import { editPostSuccess, editPostError } from '../reducers/postReducer';

import axios from 'axios';

function* handleEditPost(args) {
  try {
    const { payload } = args;
    const { data, id } = payload;

    const post = yield call(() =>
      axios.patch('https://jsonplaceholder.typicode.com/posts/' + id, {
        ...data,
      })
    );

    yield put(editPostSuccess(post.data));
    return;
  } catch (error) {
    yield put(editPostError(error));
  }
}

export default function* editSaga() {
  yield takeEvery('posts/editPost', handleEditPost);
}
