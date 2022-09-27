import { useState } from 'react';
import TableList from './TableList';
import { useSelector } from 'react-redux';

export default function MyPage({
  barActive,
  setBarActive,
  setIsModal,
  isModal,
}) {
  const posts = useSelector((state) => state.posts.posts);
  const [toggleColor, setToggleColor] = useState({
    fill: 'dark',
    border: 'border-gray-900',
  });

  const setSideBar = () => {
    if (barActive) {
      setBarActive(false);
      setToggleColor({
        fill: 'blue',
        border: 'border-blue-500',
      });
    } else {
      setBarActive(true);
      setToggleColor({
        fill: 'dark',
        border: 'border-gray-900',
      });
    }
  };

  const handleModal = () => {
    const open = isModal.OK ? false : true;
    setIsModal({ OK: open, id: null });
  };

  return (
    <div className="w-full">
      <div className="h-screen px-2 bg-slate-200 shadow rounded flex flex-col gap-5">
        <div className="flex flex-row items-center justify-between">
          <button
            onClick={setSideBar}
            className={`${toggleColor.border} p-1 border-2 w-fit self-start m-2 rounded-md`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill={toggleColor.fill}
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div>
            {posts.length < 100 ? (
              <div className="flex justify-center items-center">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          <button
            onClick={handleModal}
            className="justify-center gap-3 w-fit h-fit p-1 items-center flex border-2 rounded-md border-gray-900 hover:text-slate-50 hover:bg-blue-500 hover:border-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-node-plus"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
              />
            </svg>
            <p className="font-bold ">ADD</p>
          </button>
        </div>
        <div className="mb-5 overflow-x-auto relative shadow-md sm:rounded-lg">
          <TableList isModal={isModal} setIsModal={setIsModal} />
        </div>
      </div>
    </div>
  );
}
