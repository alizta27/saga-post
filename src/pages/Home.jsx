import MyPage from '../components/MyPage';
import SideBar from '../components/SideBar';
import Modal from '../components/Modal';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [barActive, setBarActive] = useState(true);
  const [isModal, setIsModal] = useState({ OK: false });

  return (
    <div className="flex flex-row justify-between w-screen">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {barActive && <SideBar />}
      {isModal.OK && <Modal setIsModal={setIsModal} isModal={isModal} />}
      <MyPage
        barActive={barActive}
        setBarActive={setBarActive}
        setIsModal={setIsModal}
        isModal={isModal}
      />
    </div>
  );
}
