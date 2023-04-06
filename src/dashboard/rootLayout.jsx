import Footer from './footer';
import SideBar from './sidebar';
import { useSelector } from 'react-redux';
import OverlayMain from './components/UI/overlay-main';

const RootLayout = ({ children }) => {
  const displayNav = useSelector(state => state.display.sideNav);
  const openModal = useSelector(state => state.mainOverlay.open);

  return (
    <div className="xl:grid grid-cols-[20vw,_1fr] min-h-screen">
      <div
        className={`fixed xl:w-[20vw] overflow-y-scroll overscroll-contain h-full scroll col-[1_/_span_1] ${
          openModal ? 'xl:z-[9999]' : 'xl:z-auto'
        } 
        ${displayNav ? '' : '-z-10'}
        
        `}
      >
        <SideBar />
      </div>
      <main className="bg-primary col-[2_/_-1] w-full px-5 xl:px-16 flex flex-col justify-between min-h-screen">
        {openModal && <OverlayMain />}
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default RootLayout;
