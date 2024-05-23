import { type FC } from 'react';

type TaskProps = {
  handleOpenModal: (modalType: string) => void;
};

const Task: FC<TaskProps> = ({ handleOpenModal }) => {
  function handleSelectTask() {
    handleOpenModal('EDIT-TASK');
  }

  return (
    <div
      onClick={handleSelectTask}
      className="py-7 px-5 shadow rounded-xl w-96"
    >
      <h4 className="font-bold text-2xl tracking-tighter mb-2">Task name</h4>
      <h6 className="font-bold text-gray">0 of 3 substasks</h6>
    </div>
  );
};

export default Task;
