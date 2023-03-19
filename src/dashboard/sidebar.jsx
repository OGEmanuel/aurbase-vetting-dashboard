import logo from '../assets/logo.svg';
import dashboard from '../assets/dashboard.svg';
import ellipses from '../assets/ellipses.svg';
import track from '../assets/track-changes.svg';
import assign from '../assets/assignment.svg';
import cancel from '../assets/cancel.svg';
import logout from '../assets/logout.svg';
import message from '../assets/message.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Overlay from './components/UI/overlay';
const SideBar = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.displayNav.display);

  const handleClick = () => {
    dispatch(display());
  };

  return (
    <>
      {show && <Overlay />}
      <nav
        className={`border-r border-primary bg-white pb-20 pt-2 xl:pt-4 min-h-screen transition-[.2s] overflow-y-auto scroll xl:z-auto  xl:translate-x-0  
        
        ${
          show
            ? 'translate-x-0 z-[9999] block fixed top-0 bottom-0'
            : '-translate-x-[100vw]'
        }

        `}
      >
        <div className="pb-4 mb-5">
          <Link onClick={handleClick} to="/dashboard">
            <img src={logo} alt="" className="pl-2.5 pr-10 pb-3" />
          </Link>
          <hr className="border border-extra-1" />
        </div>
        <div className="mb-60 px-2.5">
          <Link
            onClick={handleClick}
            to="/dashboard"
            className="flex gap-4 font-semibold items-center mb-6 py-2 px-1"
          >
            <img src={dashboard} alt="" />
            <p>Dashboard</p>
          </Link>
          <Link
            onClick={handleClick}
            to="/profile"
            className="flex gap-4 mb-6 bg-black text-white font-semibold items-center py-2 px-1 rounded-custom-xs"
          >
            <img src={assign} alt="" />
            <p>Profile</p>
          </Link>
          <div className="mb-6">
            <Link
              onClick={handleClick}
              to="/dashboard"
              className="flex gap-4 font-semibold text-tertiary items-center py-2 px-1 mb-4"
            >
              <img src={track} alt="" />
              <p>Progress</p>
            </Link>
            <div className="mx-2 font-semibold flex items-start gap-6">
              <img src={ellipses} alt="" />
              <div className="text-extra">
                <div className="flex mb-5 -mt-1 justify-between gap-16 items-center">
                  <Link onClick={handleClick} to="/dashboard">
                    Personality Test
                  </Link>
                  <img src={cancel} alt="" />
                </div>
                <div className="flex mb-6 justify-between items-center">
                  <Link onClick={handleClick} to="/dashboard">
                    Language Test
                  </Link>
                  <img src={cancel} alt="" />
                </div>
                <div className="flex mb-6 justify-between items-center">
                  <Link onClick={handleClick} to="/dashboard">
                    Assessment
                  </Link>
                  <img src={cancel} alt="" />
                </div>
                <div className="flex justify-between items-center">
                  <Link onClick={handleClick} to="/dashboard">
                    Live Interview
                  </Link>
                  <img src={cancel} alt="" />
                </div>
              </div>
            </div>
          </div>
          <Link
            onClick={handleClick}
            to="/dashboard"
            className="flex gap-4 font-semibold text-tertiary items-center py-2 px-1 mb-4"
          >
            <img src={message} alt="" />
            <div className="relative w-[35%]">
              <p>Practice</p>
              <span className="text-secondary text-[7px] bg-extra-3 absolute -top-[.3rem] right-0 px-2 py-[2px] rounded-custom-tiny">
                Coming Soon
              </span>
            </div>
          </Link>
        </div>
        <Link
          onClick={handleClick}
          to="/dashboard"
          className="flex gap-4 font-semibold text-tertiary items-center py-2 px-3.5"
        >
          <img src={logout} alt="" />
          <p>Logout</p>
        </Link>
      </nav>
    </>
  );
};

export default SideBar;
