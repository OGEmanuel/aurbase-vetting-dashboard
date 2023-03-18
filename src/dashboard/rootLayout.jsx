import Footer from './footer';
import Header from './header';
import SideBar from './sidebar';

const RootLayout = ({ children }) => {
  return (
    <div className="xl:grid grid-cols-[1fr,_3.85fr] min-h-screen">
      <div className="fixed overflow-y-scroll overscroll-contain h-full scroll col-[1_/_span_1]">
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
