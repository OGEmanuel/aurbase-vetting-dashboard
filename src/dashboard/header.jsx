import slider from '../assets/dummy-slider.svg';
import notify from '../assets/dummy-notify.svg';
import Slider from './components/UI/slider';

const Header = ({ title = 'My Profile' }) => {
  return (
    <nav className="flex justify-between items-center px-16 py-[3.8rem]">
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
