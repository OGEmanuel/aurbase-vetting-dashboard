import notify from '../assets/dummy-notify.svg';
import Slider from './components/UI/slider';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import { Link } from 'react-router-dom';

const Header = ({ title = 'My Profile' }) => {
  return (
    <nav className="flex justify-between items-center px-16 py-[3.8rem]">
      <div className="hidden items-center gap-4">
        <img src={menu} alt="" />
        <Link to="/">
          <img src={logo} alt="" className="w-[5rem]" />
        </Link>
      </div>
      <h1 className="font-bold text-[2.5rem]">{title}</h1>
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm whitespace-nowrap">
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
