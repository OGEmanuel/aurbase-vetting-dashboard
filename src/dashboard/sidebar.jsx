import logo from '../assets/logo.svg';
import dashboard from '../assets/dashboard.svg';
import ellipse from '../assets/ellipse.svg';
import ellipses from '../assets/ellipses.svg';
import track from '../assets/track-changes.svg';
import assign from '../assets/assignment.svg';
import cancel from '../assets/cancel.svg';
import logout from '../assets/logout.svg';
import message from '../assets/message.svg';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <nav className="px-4 pt-8 border-r border-primary bg-white min-h-screen pb-20">
      <div className="pb-4 mb-10 border-b border-bg-1">
        <Link to="/dashboard">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="mb-60">
        <Link
          to="/dashboard"
          className="flex gap-4 font-semibold items-center mb-8 py-2 px-1"
        >
          <img src={dashboard} alt="" />
          <p>Dashboard</p>
        </Link>
        <Link
          to="/dashboard"
          className="flex gap-4 mb-8 bg-black text-white font-semibold items-center py-2 px-1 rounded-custom-xs"
        >
          <img src={assign} alt="" />
          <p>Profile</p>
        </Link>
        <div className="mb-8">
          <Link
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
                <Link to="/dashboard">Personality Test</Link>
                <img src={cancel} alt="" />
              </div>
              <div className="flex mb-6 justify-between items-center">
                <Link to="/dashboard">Language Test</Link>
                <img src={cancel} alt="" />
              </div>
              <div className="flex mb-5 justify-between items-center">
                <Link to="assessment">Assessment</Link>
                <img src={cancel} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <Link to="/dashboard">Live Interview</Link>
                <img src={cancel} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/dashboard"
          className="flex gap-4 font-semibold text-tertiary items-center py-2 px-1 mb-4"
        >
          <img src={message} alt="" />
          <p>Practice</p>
        </Link>
      </div>
      <Link
        to="/dashboard"
        className="flex gap-4 font-semibold text-tertiary items-center py-2 px-1"
      >
        <img src={logout} alt="" />
        <p>Logout</p>
      </Link>
    </nav>
  );
};

export default SideBar;
