import { type FC } from 'react';

type ButtonSmallProps = {
  content: string;
};

const ButtonSmall: FC<ButtonSmallProps> = ({ content }) => {
  return (
    <button className="button text-2xl bg-blue hover:bg-purple text-white">
      {content}
    </button>
  );
};

export default ButtonSmall;
