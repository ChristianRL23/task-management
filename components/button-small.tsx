import { type FC } from 'react';

type ButtonSmallProps = {
  content: string;
};

const ButtonSmall: FC<ButtonSmallProps> = ({ content }) => {
  return (
    <button className="bg-blue rounded-full text-white font-semibold p-4 text-2xl hover:bg-purple">
      {content}
    </button>
  );
};

export default ButtonSmall;
