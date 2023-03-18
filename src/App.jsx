import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import OTP from './Auth/verify';
import RootLayout from './pages/Root';
import ProfilePage from './pages/Profile';
import Root from './pages/Root';
import ForgetPassword from './Auth/ForgetPassword';
import Dashboard from './pages/Dashboard';
import Personality from './pages/Personality';
import Language from './pages/Language';
import Interview from './pages/Interview';

const ErrorPage = React.lazy(() => import('./pages/Error'));
const Login = React.lazy(() => import('./Auth/Login'));

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
    path: 'forgetpassword',
    element: (
      <React.Suspense fallback={<>...</>}>
        <ForgetPassword />
      </React.Suspense>
    ),
    errorElement: (
      <React.Suspense fallback={<>...</>}>
        <ErrorPage />
      </React.Suspense>
    ),
  },
  {
    path: 'dashboard',
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
            <Dashboard />
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
  {
    path: 'progress',
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
            <Personality />
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
  {
    path: 'language',
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
            <Language />
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
  {
    path: 'interview',
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
            <Interview />
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
