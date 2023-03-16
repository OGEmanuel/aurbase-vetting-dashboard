import { Outlet } from 'react-router-dom';
import RootLayout from '../components/dashboard/rootLayout';

const Root = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

export default Root;
