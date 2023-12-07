// Modal.js
import React from 'react';
import ReactModal from 'react-modal';
import './styles.css';


const Modal = ({ isOpen, closeModal, content }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md modal-content"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center modal-overlay"
    >
      <div className="mt-4 mod">
        <p className="text-lg font-semibold">{content.title}</p>
        <p className="text-gray-700">{content.description}</p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md cursor-pointer" onClick={closeModal}>
        Close
      </button>
    </ReactModal>
  );
};

export default Modal;
