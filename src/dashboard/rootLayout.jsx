import Footer from './footer';
import SideBar from './sidebar';
import { useSelector } from 'react-redux';

const RootLayout = ({ children }) => {
  const show = useSelector(state => state.displayNav.display);

  return (
    <div className="xl:grid grid-cols-[20vw,_1fr] min-h-screen">
      <div
        className={`fixed xl:w-[20vw] overflow-y-scroll overscroll-contain h-full scroll col-[1_/_span_1] xl:z-auto 
        ${show ? '' : '-z-10'}
        
        `}
      >
        <SideBar />
      </div>
      <main className="bg-primary col-[2_/_-1] w-full px-5 xl:px-16">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default RootLayout;
