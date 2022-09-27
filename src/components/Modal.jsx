/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  createPost,
  editPost,
  getPostFetch,
  deletePost,
} from '../store/reducers/postReducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Modal({ setIsModal, isModal }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    userId: '',
    title: '',
    body: '',
  });
  const post = useSelector((state) => state.posts.post);

  useEffect(() => {
    if (isModal.id) {
      dispatch(getPostFetch({ id: isModal.id, type: 'detail' }));
    } else {
      setInput({
        userId: '',
        title: '',
        body: '',
      });
    }
  }, [isModal.id]);
  useEffect(() => {
    if (isModal.id && post.id) {
      setInput(post);
    }
  }, [post, isModal.id]);

  const handleInputForm = (e) => {
    const { value, name } = e.target;
    const newInput = { ...input };
    newInput[name] = value;
    setInput(newInput);
  };

  const handleSubmit = () => {
    const postForm = dispatch(createPost(input));
    if (postForm) {
      toast.success('Success to add post!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Failed to add post!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModal(false);
  };

  const handleSaveEdit = () => {
    const postForm = dispatch(
      editPost({
        data: input,
        id: isModal.id,
      })
    );
    if (postForm) {
      toast.success('Success to edit post!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Failed to edit post!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModal(false);
  };

  const handleDelete = (id) => {
    const deleting = dispatch(deletePost(id));
    if (deleting) {
      toast.success('Success to delete post!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Failed to delete post!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModal(false);
  };

  if (isModal.type === 'delete') {
    return (
      <div className="absolute z-50 bg-white w-full bg-opacity-30 h-full">
        <div className="absolute  inset-x-1/3 inset-y-1/4 justify-items-center justify-center items-center w-96">
          <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Are you sure you want to delete?
            </h5>
            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                You will lost your data
              </div>
            </div>

            <div className="flex gap-2 flex-row">
              <button
                onClick={() => handleDelete(isModal.id)}
                type="button"
                className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
              >
                Delete
              </button>
              <button
                onClick={() => setIsModal({ OK: false })}
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="absolute z-50 bg-white w-full bg-opacity-30 h-full">
        <div className="absolute top-20 inset-x-1/3 justify-items-center justify-center items-center w-96">
          <div
            onClick={() => setIsModal({ OK: false })}
            className="w-full flex justify-center"
          >
            <div className="w-8 h-8 mb-1 bg-slate-200 items-center flex justify-center rounded-full">
              <button className="font-bold hover:text-red-600">X</button>
            </div>
          </div>
          <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                {post.length ? 'Edit your post' : 'Inser your post'}
              </h5>
              <div>
                <label
                  htmlFor="userId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  User Id
                </label>
                <input
                  onChange={(e) => handleInputForm(e)}
                  type="text"
                  name="userId"
                  id="userId"
                  value={input.userId}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="user id"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Title
                </label>
                <input
                  onChange={(e) => handleInputForm(e)}
                  type="text"
                  name="title"
                  id="title"
                  value={input.title}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="user id"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="body"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Description
                </label>
                <textarea
                  onChange={(e) => handleInputForm(e)}
                  name="body"
                  id="body"
                  value={input.body}
                  placeholder="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <button
                onClick={!isModal.id ? handleSubmit : handleSaveEdit}
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {!isModal.id ? 'SAVE' : 'EDIT'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
