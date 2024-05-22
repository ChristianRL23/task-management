import { FC } from 'react';

type ButtonLargeProps = {
  text: string;
  color: 'sky-blue' | 'red' | 'purple' | 'blue';
  textColor: string;
};

const ButtonLarge: FC<ButtonLargeProps> = ({ text, color, textColor }) => {
  return (
    <button className={`button w-full text-xl bg-${color} text-${textColor}`}>
      {text}
    </button>
  );
};

export default ButtonLarge;
