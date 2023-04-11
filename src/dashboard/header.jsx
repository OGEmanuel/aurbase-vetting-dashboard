import notify from '../assets/dummy-notify.svg';
import Slider from './components/UI/slider';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nav } from '../redux-store/features/display-nav';
import { overlay } from '../redux-store/features/display-modal';
import { off } from '../redux-store/features/set-progress';

const Header = ({ title = 'My Profiles' }) => {
  const dispatch = useDispatch();
  const displayNav = useSelector(state => state.display.sideNav);

  const handleClick = () => {
    dispatch(nav());
    dispatch(overlay());
  };

  const handleNotify = () => {
    dispatch(off());
  };

  return (
    <nav className="flex justify-between items-center py-[1.9rem] xl:pt-[2.9rem] xl:pb-4 max-width w-full">
      <div
        className={`flex xl:hidden items-end gap-4
      
      ${displayNav ? 'z-auto' : 'z-20'}

      `}
      >
        <button onClick={handleClick}>
          <img src={menu} />
        </button>
        <Link to="/">
          <img src={logo} className="w-[7rem]" />
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
        <Link onClick={handleNotify} to="/notifications">
          <img src={notify} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
