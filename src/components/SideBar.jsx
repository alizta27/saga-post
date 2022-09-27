export default function SideBar() {
  return (
    <aside className="flex h-screen flex-col bg-gray-900 gap-2">
      <div className="mt-3 flex flex-row justify-evenly mx-8 gap-2 justify-items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            className="bi bi-badge-vr"
            viewBox="0 0 16 16"
          >
            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
            <path d="M4.508 11h1.429l1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5L4.508 11zm6.387-5.999H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95H9.673z" />
          </svg>
        </div>
        <div className="self-center">
          <h1 className="text-lg font-bold text-white">VirtualSpirit</h1>
        </div>
      </div>
      <button className="bg-slate-800 border-l-4 border-white py-2 px-10 mt-10 flex flex-row justify-between w-full justify-items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            className="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fillRule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        </div>
        <p className="text-md text-white self-center">Home</p>
      </button>
      <div>s</div>
    </aside>
  );
}
