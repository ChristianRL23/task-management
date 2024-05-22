import { type ReactNode, type FC } from 'react';

type InputFieldProps = {
  children: ReactNode;
  labelText: string;
};

const InputField: FC<InputFieldProps> = ({ children, labelText }) => {
  return (
    <div className="flex flex-col font-bold text-gray">
      <label className="mb-3 text-lg">{labelText}</label>
      {children}
    </div>
  );
};

export default InputField;
