import slider from '../../assets/dummy-slider.svg';
import notify from '../../assets/dummy-notify.svg';

const Header = ({ title = 'My Profile' }) => {
  return (
    <nav className="flex justify-between items-center p-16">
      <h1 className="font-bold text-[2.5rem]">{title}</h1>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm whitespace-nowrap">
            Ready to work
          </p>
          <img src={slider} alt="" />
        </div>
        <img src={notify} alt="" />
      </div>
    </nav>
  );
};

export default Header;
