import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import OTP from './components/Auth/verify';
import RootLayout from './pages/Root';
import ProfilePage from './pages/Profile';
import Root from './pages/Root';

const ErrorPage = React.lazy(() => import('./pages/Error'));
const Login = React.lazy(() => import('./components/Auth/Login'));

const router = createBrowserRouter([
  {
    path: '',
    element: (
      <React.Suspense fallback={<>...</>}>
        <Login />
      </React.Suspense>
    ),
    errorElement: (
      <React.Suspense fallback={<>...</>}>
        <ErrorPage />
      </React.Suspense>
    ),
  },
  {
    path: 'verify',
    element: (
      <React.Suspense fallback={<>...</>}>
        <OTP />
      </React.Suspense>
    ),
    errorElement: (
      <React.Suspense fallback={<>...</>}>
        <ErrorPage />
      </React.Suspense>
    ),
  },
  {
    path: 'profile',
    element: (
      <React.Suspense fallback={<>...</>}>
        <Root />
      </React.Suspense>
    ),
    errorElement: (
      <React.Suspense fallback={<>...</>}>
        <ErrorPage />
      </React.Suspense>
    ),
    children: [
      {
        path: '',
        element: (
          <React.Suspense fallback={<>...</>}>
            <ProfilePage />
          </React.Suspense>
        ),
        errorElement: (
          <React.Suspense fallback={<>...</>}>
            <ErrorPage />
          </React.Suspense>
        ),
      },
    ],
  },
  // {
  //   path: 'dashboard',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       {/* <Dashboard /> */}
  //     </React.Suspense>
  //   ),
  //   errorElement: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ErrorPage />
  //     </React.Suspense>
  //   ),
  //   loader: checkAuthLoader,
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
