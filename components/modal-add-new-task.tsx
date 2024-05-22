import { type FC } from 'react';
import Modal from './modal';
import Input from './input';
import TextArea from './textarea';
import InputToDelete from './input-to-delete';
import ButtonLarge from './button-large';
import SelectOption from './select-option';

type ModalAddNewTaskProps = {
  handleCloseModal: () => void;
};

const ModalAddNewTask: FC<ModalAddNewTaskProps> = ({ handleCloseModal }) => {
  return (
    <Modal handleCloseModal={handleCloseModal}>
      <h6 className="font-bold text-2xl mb-6">Add New Task</h6>
      <form className="grid grid-cols-1 gap-7">
        <Input />
        <TextArea />
        <InputToDelete substasks={['Drink coffee']} />
        <ButtonLarge
          textColor="blue"
          color="sky-blue"
          text="+ Add New Subtask"
        />
        <SelectOption />
        <ButtonLarge textColor="white" color="blue" text="Create Task" />
      </form>
    </Modal>
  );
};

export default ModalAddNewTask;
