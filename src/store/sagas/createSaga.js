import { call, put, takeEvery } from 'redux-saga/effects';
import { createPostSuccess, createPostError } from '../reducers/postReducer';

import axios from 'axios';

function* handleCreatePost(args) {
  try {
    const { payload } = args;
    const post = yield call(() =>
      axios.post(' https://jsonplaceholder.typicode.com/posts', { payload })
    );

    if (!post) {
      throw new Error('Failed to create post');
    }

    yield put(createPostSuccess(payload));
    return 'Success!';
  } catch (error) {
    yield put(createPostError(error));
  }
}

export default function* postSaga() {
  yield takeEvery('posts/createPost', handleCreatePost);
}
