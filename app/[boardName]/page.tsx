'use client';
import ButtonSmall from '@/components/button-small';
import Header from '@/components/header';
import Modal from '@/components/modal';
import ModalAddNewTask from '@/components/modal-add-new-task';
import ModalEditTask from '@/components/modal-edit-task';
import Task from '@/components/task';
import { ReactNode, useState } from 'react';

type modalIsOpenTrue = {
  isOpen: true;
  payload: string;
};

type modalIsOpenFalse = {
  isOpen: false;
};

type modalIsOpenInitialState = modalIsOpenTrue | modalIsOpenFalse;

const BoardPage = () => {
  const [modalState, setModalState] = useState<modalIsOpenInitialState>({
    isOpen: false,
  });
  let content: ReactNode;
  let modalContent: ReactNode;
  const empty = false;

  function handleCloseModal() {
    setModalState({ isOpen: false });
  }

  function handleOpenModal(modalType: string) {
    setModalState({ isOpen: true, payload: modalType });
  }

  if (empty) {
    content = (
      <section className="flex items-center justify-center px-12 grow">
        <div className="flex flex-col items-center">
          <h6 className="font-semibold text-gray text-2xl mb-8 text-center">
            This board is empty. Create a new column to get started.
          </h6>
          <ButtonSmall content="+ Add New Column" />
        </div>
      </section>
    );
  } else {
    content = (
      <section className="flex grow py-9 px-7">
        <div>
          <div className="flex items-center mb-5">
            <div className="rounded-full w-5 h-5 bg-blue mr-4"></div>
            <h6 className="font-semibold text-gray tracking-widest text-xl">
              TODO (0)
            </h6>
          </div>
          <div className="grid grid-cols-1 gap-7 tracking-tighter">
            <Task handleOpenModal={handleOpenModal} />
            <Task handleOpenModal={handleOpenModal} />
            <Task handleOpenModal={handleOpenModal} />
          </div>
        </div>
      </section>
    );
  }

  if (modalState.isOpen) {
    if (modalState.payload === 'ADD-NEW-TASK') {
      modalContent = <ModalAddNewTask handleCloseModal={handleCloseModal} />;
    } else if (modalState.payload === 'EDIT-TASK') {
      modalContent = <ModalEditTask handleCloseModal={handleCloseModal} />;
    }
  }

  return (
    <main className="bg-sky-blue-light h-screen flex flex-col">
      <Header boardIsEmpty={empty} handleOpenModal={handleOpenModal} />
      {content}
      {modalContent}
    </main>
  );
};

export default BoardPage;
