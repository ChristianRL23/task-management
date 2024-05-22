'use client';
import ButtonSmall from '@/components/button-small';
import Header from '@/components/header';
import Modal from '@/components/modal';
import ModalAddNewTask from '@/components/modal-add-new-task';
import Task from '@/components/task';
import { ReactNode, useState } from 'react';

const BoardPage = () => {
  const [newTaskModalIsOpen, setNewTaskModalIsOpen] = useState(false);
  let content: ReactNode;
  const empty = false;

  function handleCloseModal() {
    setNewTaskModalIsOpen(false);
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
            <Task />
            <Task />
            <Task />
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-sky-blue-light h-screen flex flex-col">
      <Header
        boardIsEmpty={empty}
        setNewTaskModalIsOpen={setNewTaskModalIsOpen}
      />
      {content}
      {newTaskModalIsOpen && (
        <ModalAddNewTask handleCloseModal={handleCloseModal} />
      )}
    </main>
  );
};

export default BoardPage;
