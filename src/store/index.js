import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postReducer from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
