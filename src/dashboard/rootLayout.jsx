import Header from './header';
import SideBar from './sidebar';

const RootLayout = props => {
  return (
    <div className="grid grid-cols-[1.155fr,_4fr] min-h-screen">
      <div className="fixed overflow-y-scroll h-full scroll col-[1_/_span_1]">
        <SideBar />
      </div>
      <main className="bg-primary col-[2_/_-1] w-full">{props.children}</main>
    </div>
  );
};

export default RootLayout;
