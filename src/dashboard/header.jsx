import notify from '../assets/dummy-notify.svg';
import Slider from './components/UI/slider';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import { Link } from 'react-router-dom';

const Header = ({ title = 'My Profile' }) => {
  return (
    <nav className="flex justify-between items-center px-5 xl:px-16 py-[1.9rem] xl:py-[3.8rem]">
      <div className="flex xl:hidden items-end gap-4 z-20">
        <button>
          <img src={menu} alt="" />
        </button>
        <Link to="/">
          <img src={logo} alt="" className="w-[7rem]" />
        </Link>
      </div>
      <h1 className="font-bold text-[2.5rem] hidden xl:block">{title}</h1>
      <div className="flex items-center gap-12 xl:gap-16">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm whitespace-nowrap hidden xl:block">
            Ready to work
          </p>
          <Slider />
        </div>
        <img src={notify} alt="" />
      </div>
    </nav>
  );
};

export default Header;
