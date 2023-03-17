import Header from './header';
import SideBar from './sidebar';

const RootLayout = props => {
  return (
    <div className="xl:grid grid-cols-[1fr,_4fr] min-h-screen">
      <div className="fixed overflow-y-scroll overscroll-contain h-full scroll col-[1_/_span_1]">
        <SideBar />
      </div>
      <main className="bg-primary col-[2_/_-1] w-full">{props.children}</main>
    </div>
  );
};

export default RootLayout;
