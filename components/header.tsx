import Image from 'next/image';
import LogoMobile from './../assets/logo-mobile.svg';
import ChevronDown from './../assets/icon-chevron-down.svg';
import AddTaskIcon from './../assets/icon-add-task-mobile.svg';
import VerticalEllipsis from './../assets/icon-vertical-ellipsis.svg';

const Header = () => {
  return (
    <header className="flex justify-between bg-white p-7">
      <div className="flex justify-between items-center">
        <Image className="mr-5" src={LogoMobile} alt="Logo" />
        <h5 className="font-bold text-3xl mr-2">Platform Launch</h5>
        <Image src={ChevronDown} alt="Icon chevron down" />
      </div>
      <div className="flex items-center">
        <button className="bg-sky-blue py-3 px-6 rounded-full mr-5">
          <Image src={AddTaskIcon} alt="Add column icon" />
        </button>
        <Image
          className="h-6"
          src={VerticalEllipsis}
          alt="Vertical ellipsis icon"
        />
      </div>
    </header>
  );
};

export default Header;
