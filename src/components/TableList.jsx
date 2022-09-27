/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostFetch } from '../store/reducers/postReducer';

export default function TableList({ setIsModal, isModal }) {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 1; i <= 100; i++) {
      dispatch(
        getPostFetch({
          id: i,
        })
      );
    }
  }, []);

  const handleEdit = (id) => {
    const open = isModal.OK ? false : true;
    setIsModal({ OK: open, id: id });
  };
  const handleDelete = (id) => {
    const open = isModal.OK ? false : true;
    setIsModal({ OK: open, id: id, type: 'delete' });
  };

  return (
    <div className="h-full">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              No
            </th>
            <th scope="col" className="py-3 px-6">
              User_ID
            </th>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Description
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        {posts?.length ? (
          <tbody>
            {posts.map((post, idx) => {
              let bgColor = 'bg-white border-b dark:bg-gray-900';
              if ((idx + 1) % 2 === 0) {
                bgColor = 'bg-gray-50 border-b dark:bg-gray-800';
              }
              return (
                <tr key={idx} className={`${bgColor} dark:border-gray-700`}>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {idx + 1}
                  </th>
                  <td className="py-4 px-6">{post.userId}</td>
                  <td className="py-4 px-6">{post.title}</td>
                  <td className="py-4 px-6">{post.body}</td>
                  <td className="py-4 px-6">
                    <p
                      onClick={() => handleEdit(post.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </p>
                    <p
                      onClick={() => handleDelete(post.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          ''
        )}
      </table>
    </div>
  );
}
