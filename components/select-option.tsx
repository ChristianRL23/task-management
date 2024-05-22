import Image from 'next/image';
import InputField from './input-field';
import IconChevronDown from './../assets/icon-chevron-down.svg';

const SelectOption = () => {
  return (
    <InputField labelText="Status">
      <div className="input-container flex justify-between items-center">
        <h6>Todo</h6>
        <Image src={IconChevronDown} alt="Icon chevron down" />
      </div>
    </InputField>
  );
};

export default SelectOption;
