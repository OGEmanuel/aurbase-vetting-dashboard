import logo from '../assets/logo.svg';
import close from '../assets/close.svg';
import dashboardInactive from '../assets/dashboard.svg';
import dashboard from '../assets/dashboard-inactive.svg';
import ellipses from '../assets/ellipses.svg';
import track from '../assets/track-changes.svg';
import trackActive from '../assets/track.svg';
import assign from '../assets/assignment.svg';
import assignInactive from '../assets/assignment-inactive.svg';
import cancel from '../assets/cancel.svg';
import activeCheck from '../assets/check-active.svg';
import logout from '../assets/logout.svg';
import message from '../assets/message.svg';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Overlay from './components/UI/overlay';
import { nav } from '../redux-store/features/display-nav';
import { overlay } from '../redux-store/features/display-modal';
const SideBar = () => {
  const dispatch = useDispatch();
  const displayNav = useSelector(state => state.display.sideNav);
  const displayOverlay = useSelector(state => state.show.modal);

  const handleClick = () => {
    if (displayNav && displayOverlay) {
      dispatch(nav());
      dispatch(overlay());
    } else return;
  };

  return (
    <>
      {displayOverlay && <Overlay />}
      <nav
        className={`border-r border-primary bg-white pb-20 pt-2 xl:pt-4 min-h-screen transition-[.2s] overflow-y-auto scroll xl:z-auto  xl:translate-x-0  
        
        ${
          displayNav
            ? 'translate-x-0 z-[9999] block fixed top-0 bottom-0'
            : '-translate-x-[100vw]'
        }

        `}
      >
        <div className="pb-4 mb-5">
          <div className="flex items-center justify-between pl-2 pt-4 pr-4">
            <Link onClick={handleClick} to="/dashboard">
              <img
                src={logo}
                
                className="pl-2.5 pr-10 pb-3 w-[10rem] xl:w-auto"
              />
            </Link>
            <button onClick={handleClick}>
              <img src={close}  />
            </button>
          </div>
          <hr className="border border-extra-1" />
        </div>
        <div className="mb-60 px-2.5">
          <NavLink onClick={handleClick} to="/dashboard">
            {({ isActive }) => (
              <div className={isActive ? 'current-page' : 'link'}>
                <img
                  src={isActive ? dashboard : dashboardInactive}
                  alt=""
                  className="w-[1.5rem]"
                />
                <p>Dashboard</p>
              </div>
            )}
          </NavLink>
          <NavLink onClick={handleClick} to="/profile">
            {({ isActive }) => (
              <div className={isActive ? 'current-page' : 'link'}>
                <img
                  src={isActive ? assign : assignInactive}
                  
                  className="w-[1.5rem]"
                />
                <p>Profile</p>
              </div>
            )}
          </NavLink>
          <div className="mb-6">
            <NavLink onClick={e => e.preventDefault()} to="/progress">
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? 'flex py-2 px-2 mb-1.5 gap-4 font-semibold items-center rounded-custom-xs bg-black  text-white'
                      : 'flex py-2 px-2 gap-4 mb-1.5 font-semibold items-center rounded-custom-xs text-tertiary'
                  }
                >
                  <img
                    src={isActive ? trackActive : track}
                  
                    className="w-[1.5rem]"
                  />
                  <p>Progress</p>
                </div>
              )}
            </NavLink>
            <div className="font-semibold items-start relative">
              <img
                src={ellipses}
              
                className="absolute top-[8%] left-[5%]"
              />
              <div >
                <NavLink onClick={handleClick} to="/progress/personality">
                  {({ isActive }) => (
                    <div
                      className={
                        isActive ? 'progress-active' : 'progress-inactive'
                      }
                    >
                      <p className={isActive ? '' : 'text-extra'}>
                        Personality Test
                      </p>
                      <img src={isActive ? activeCheck : cancel} alt="" />
                    </div>
                  )}
                </NavLink>
                <NavLink onClick={handleClick} to="/progress/language">
                  {({ isActive }) => (
                    <div
                      className={
                        isActive ? 'progress-active' : 'progress-inactive'
                      }
                    >
                      <p className={isActive ? '' : 'text-extra'}>
                        Language Test
                      </p>
                      <img src={cancel}  />
                    </div>
                  )}
                </NavLink>
                <NavLink onClick={handleClick} to="/progress/assessment">
                  {({ isActive }) => (
                    <div
                      className={
                        isActive ? 'progress-active' : 'progress-inactive'
                      }
                    >
                      <p className={isActive ? 'mt-1' : 'text-extra mt-1'}>
                        Assessment
                      </p>
                      <img src={cancel}  />
                    </div>
                  )}
                </NavLink>
                <NavLink onClick={handleClick} to="/progress/interview">
                  {({ isActive }) => (
                    <div
                      className={
                        isActive ? 'progress-active' : 'progress-inactive'
                      }
                    >
                      <p className={isActive ? '' : 'text-extra'}>
                        {' '}
                        Live Interview
                      </p>
                      <img src={cancel}  />
                    </div>
                  )}
                </NavLink>
                {/* <div className="flex justify-between items-center">
                  <Link onClick={handleClick} to="/progress/interview">
                    Live Interview
                  </Link>
                  <img src={cancel} alt="" />
                </div> */}
              </div>
            </div>
          </div>
          <Link
            onClick={handleClick}
            to="/dashboard"
            className="flex gap-4 font-semibold text-tertiary items-center py-2 px-1 mb-4"
          >
            <img src={message}  />
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
          to="/"
          className="flex gap-4 font-semibold text-tertiary items-center py-2 px-3.5"
        >
          <img src={logout}  />
          <p>Logout</p>
        </Link>
      </nav>
    </>
  );
};

export default SideBar;
