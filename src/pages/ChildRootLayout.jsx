import { Outlet } from 'react-router-dom';

const ChildRootLayout = () => {
  return (
    <section>
      <Outlet />
    </section>
  );
};

export default ChildRootLayout;