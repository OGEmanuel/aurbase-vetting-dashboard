import Header from './header';
import SideBar from './sidebar';

const RootLayout = props => {
  return (
    <div className="grid grid-cols-[1.1fr,_4fr]">
      <SideBar />
      <main className="bg-primary">{props.children}</main>
    </div>
  );
};

export default RootLayout;
