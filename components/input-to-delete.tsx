import InputField from './input-field';
import IconCross from './../assets/icon-cross.svg';
import Image from 'next/image';
import { type FC } from 'react';

type InputToDeleteProps = {
  substasks: string[];
};

type InputToDeleteItem = {
  placeholder: string;
};

const InputToDeleteItem: FC<InputToDeleteItem> = ({ placeholder }) => {
  return (
    <div className="flex items-center">
      <input
        className="input w-full mr-5"
        placeholder={`e.g. ${placeholder}`}
      />
      <Image src={IconCross} alt="Icon cross" />
    </div>
  );
};

const InputToDelete: FC<InputToDeleteProps> = ({ substasks }) => {
  return (
    <>
      <InputField labelText="Substasks">
        {substasks.map((substask) => {
          return <InputToDeleteItem key={substask} placeholder={substask} />;
        })}
      </InputField>
    </>
  );
};

export default InputToDelete;
