import { type FC } from 'react';
import Modal from './modal';

type ModalEditTaskProps = {
  handleCloseModal: () => void;
};

const ModalEditTask: FC<ModalEditTaskProps> = ({ handleCloseModal }) => {
  return (
    <Modal handleCloseModal={handleCloseModal}>
      <h6 className="font-bold text-2xl mb-6">Add New Task</h6>
    </Modal>
  );
};

export default ModalEditTask;
