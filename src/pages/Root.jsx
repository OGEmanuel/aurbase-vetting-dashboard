import { Outlet } from 'react-router-dom';
import RootLayout from '../dashboard/rootLayout';

const Root = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

export default Root;
