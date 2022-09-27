import { call, put, takeEvery } from 'redux-saga/effects';
import { deletePostSuccess, deletePostError } from '../reducers/postReducer';

import axios from 'axios';

function* handleDeletePost(args) {
  try {
    const { payload } = args;
    const deletePost = yield call(() =>
      axios.delete('https://jsonplaceholder.typicode.com/posts/' + payload)
    );
    if (!deletePost) {
      throw new Error('Failed to delete post');
    }

    yield put(deletePostSuccess(payload));
  } catch (error) {
    yield put(deletePostError(error));
  }
}

export default function* deleteSaga() {
  yield takeEvery('posts/deletePost', handleDeletePost);
}
