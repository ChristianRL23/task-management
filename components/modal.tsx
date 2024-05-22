'use client';

import { type ReactNode, type FC } from 'react';

type ModalProps = {
  handleCloseModal: () => void;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ children, handleCloseModal }) => {
  return (
    <>
      <div
        className="bg-black/50 w-full h-full absolute"
        onClick={handleCloseModal}
      />
      <div className="fixed w-11/12 top-1/2 left-1/2 -translate-y-1/2 -translate-x-2/4 rounded-lg overflow-hidden">
        <div className=" bg-white z-10 p-6">{children}</div>
      </div>
    </>
  );
};

export default Modal;
