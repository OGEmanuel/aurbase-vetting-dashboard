import notify from '../assets/dummy-notify.svg';
import Slider from './components/UI/slider';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

const Header = ({ title = 'My Profile' }) => {
  // const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const display = useSelector(state => state.display);

  const handleClick = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <nav className="flex justify-between items-center py-[1.9rem] xl:pt-[2.9rem] xl:pb-4">
      <div
        className={`flex xl:hidden items-end gap-4 ${
          display ? 'z-auto' : 'z-20'
        }`}
      >
        <button onClick={handleClick}>
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
