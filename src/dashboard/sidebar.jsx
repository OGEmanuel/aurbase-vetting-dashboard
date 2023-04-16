import { useEffect } from 'react';
import activeCancel from '../assets/not-checked.svg';
import earnings from '../assets/earn.svg';
import earningsActive from '../assets/earn-active.svg';
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
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Overlay from './components/UI/overlay';
import { nav } from '../redux-store/features/display-nav';
import { overlay } from '../redux-store/features/display-modal';
import { overlayMain } from '../redux-store/features/open-overlay-body';
import { bioData } from '../redux-store/features/bio-modal';
import { aboutModal } from '../redux-store/features/about-modal';
import { salaryModal } from '../redux-store/features/salary-modal';
import { experienceModal } from '../redux-store/features/experience-modal';
import { educationModal } from '../redux-store/features/education-modal';
import { rolesModal } from '../redux-store/features/roles-modal';
import { saveEmail, saveIp } from '../redux-store/fetch/authSlice';
import {
  language,
  off,
  personality,
} from '../redux-store/features/set-progress';
const SideBar = () => {
  const dispatch = useDispatch();
  const displayNav = useSelector(state => state.display.sideNav);
  const displayOverlay = useSelector(state => state.show.modal);
  const openMainOverlay = useSelector(state => state.mainOverlay.open);
  const biodataModal = useSelector(state => state.bio.open);
  const about = useSelector(state => state.about.open);
  const salary = useSelector(state => state.salary.open);
  const experience = useSelector(state => state.experience.open);
  const education = useSelector(state => state.education.open);
  const roles = useSelector(state => state.roles.open);
  const progress = useSelector(state => state.progress.page);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/progress') {
      dispatch(off());
    }
  }, []);

  const handleClick = () => {
    if (displayNav && displayOverlay) {
      dispatch(nav());
      dispatch(overlay());
    } else return;
  };

  const logoutHandler = () => {
    sessionStorage.removeItem('data');
    dispatch(saveEmail(null));
    dispatch(saveIp(null));
    navigate('/', { replace: true });
  };

  const handleNavClick = () => {
    if (openMainOverlay) {
      if (biodataModal) {
        dispatch(overlayMain());
        dispatch(bioData());
      }
      if (about) {
        dispatch(overlayMain());
        dispatch(aboutModal());
      }
      if (salary) {
        dispatch(overlayMain());
        dispatch(salaryModal());
      }
      if (experience) {
        dispatch(overlayMain());
        dispatch(experienceModal());
      }
      if (education) {
        dispatch(overlayMain());
        dispatch(educationModal());
      }
      if (roles) {
        dispatch(overlayMain());
        dispatch(rolesModal());
      }
    }
  };

  const handleOthers = () => {
    handleClick();
    dispatch(off());
  };

  const handlePersonality = () => {
    handleClick();
    dispatch(personality());
  };

  const handleLanguage = () => {
    handleClick();
    dispatch(language());
  };

  return (
    <>
      {displayOverlay && <Overlay />}
      <nav
        onClick={handleNavClick}
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
            <button onClick={handleClick} className="xl:hidden">
              <img src={close} />
            </button>
          </div>
          <hr className="border border-extra-1" />
        </div>
        <div className="mb-60 px-2.5">
          <NavLink onClick={handleOthers} to="/dashboard">
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
          <NavLink onClick={handleOthers} to="/profile">
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
            <NavLink onClick={handlePersonality} to="/progress">
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
              <img src={ellipses} className="absolute top-[8%] left-[5%]" />
              <div>
                <NavLink
                  onClick={handlePersonality}
                  to="/progress"
                  className="w-full"
                >
                  <div
                    className={
                      progress === 0 ? 'progress-active' : 'progress-inactive'
                    }
                  >
                    <p className={progress === 0 ? '' : 'text-extra'}>
                      Personality Test
                    </p>
                    <img src={progress === 0 ? activeCheck : cancel} alt="" />
                  </div>
                </NavLink>
                <NavLink
                  onClick={handleLanguage}
                  to="/progress"
                  className="w-full"
                >
                  <div
                    className={
                      progress === 1 ? 'progress-active' : 'progress-inactive'
                    }
                  >
                    <p className={progress === 1 ? '' : 'text-extra'}>
                      Language Test
                    </p>
                    <img src={progress === 1 ? activeCancel : cancel} />
                  </div>
                </NavLink>
                <NavLink onClick={handleOthers} to="/progress/assessment">
                  {({ isActive }) => (
                    <div
                      className={
                        isActive ? 'progress-active' : 'progress-inactive'
                      }
                    >
                      <p className={isActive ? 'mt-1' : 'text-extra mt-1'}>
                        Assessment
                      </p>
                      <img src={isActive ? activeCancel : cancel} />
                    </div>
                  )}
                </NavLink>
                <NavLink onClick={handleOthers} to="/progress/interview">
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
                      <img src={isActive ? activeCancel : cancel} />
                    </div>
                  )}
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink onClick={handleOthers} to="/earnings">
            {({ isActive }) => (
              <div className={isActive ? 'current-page' : 'link'}>
                <img
                  src={isActive ? earningsActive : earnings}
                  className="w-[1.5rem]"
                />
                <p>Earnings</p>
              </div>
            )}
          </NavLink>
          <Link
            onClick={handleOthers}
            to="/dashboard"
            className="flex gap-4 font-semibold text-tertiary items-center py-2 px-1 mb-4"
          >
            <img src={message} />
            <div className="relative w-[35%]">
              <p>Practice</p>
              <span className="text-secondary text-[7px] bg-extra-3 absolute -top-[.3rem] right-0 px-2 py-[2px] rounded-custom-tiny">
                Coming Soon
              </span>
            </div>
          </Link>
        </div>
        <Link
          onClick={logoutHandler}
          className="flex gap-4 font-semibold text-tertiary items-center py-2 px-3.5"
        >
          <img src={logout} />
          <p>Logout</p>
        </Link>
      </nav>
    </>
  );
};

export default SideBar;
