import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: {},
    isLoading: false,
    isError: false,
    success: false,
  },
  reducers: {
    getPostFetch: (state) => {
      state.isLoading = true;
    },
    getPostSuccess: (state, action) => {
      state.posts = [...state.posts, action.payload];
      state.isLoading = false;
    },
    getPostFailure: (state, action) => {
      state.isLoading = false;
      state.isError = {
        ERR: true,
        msg: action.payload,
      };
    },
    createPost: (state) => {
      state.isLoading = false;
    },
    editPost: (state) => {
      state.isLoading = false;
    },
    createPostSuccess: (state, action) => {
      state.posts = [action.payload, ...state.posts];
      state.success = true;
      state.isLoading = false;
    },
    createPostError: (state, action) => {
      state.isLoading = false;
      state.isError = {
        ERR: true,
        msg: action.payload,
      };
    },
    editPostSuccess: (state, action) => {
      const newPost = [...state.posts];
      const id = action.payload.id;
      const objIndex = newPost.findIndex((obj) => obj.id === id);
      newPost[objIndex] = action.payload;
      state.posts = newPost;
      state.success = true;
      state.isLoading = false;
    },
    detailPostSuccess: (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
    },
    editPostError: (state, action) => {
      state.isLoading = false;
      state.isError = {
        ERR: true,
        msg: action.payload,
      };
    },
    deletePost: (state) => {
      state.isLoading = false;
    },
    deletePostSuccess: (state, action) => {
      const newPost = [...state.posts];
      const index = newPost.findIndex((obj) => obj.id === action.payload);
      if (index > -1) {
        newPost.splice(index, 1);
      }
      state.posts = newPost;
      state.isLoading = false;
    },
    deletePostError: (state, action) => {
      state.isLoading = false;
      state.isError = {
        ERR: true,
        msg: action.payload,
      };
    },
  },
});

export const {
  getPostFailure,
  createPostError,
  getPostSuccess,
  createPostSuccess,
  getPostFetch,
  createPost,
  detailPostSuccess,
  editPostSuccess,
  editPostError,
  editPost,
  deletePost,
  deletePostSuccess,
  deletePostError,
} = postSlice.actions;

export default postSlice.reducer;
