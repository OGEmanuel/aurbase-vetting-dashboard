import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import OTP from './Auth/verify';
import RootLayout from './pages/Root';
import ChildRoot from './pages/ChildRootLayout';
import ProfilePage from './pages/Profile';
import Root from './pages/Root';
import ForgetPassword from './Auth/ForgetPassword';
import Dashboard from './pages/Dashboard';
import Personality from './pages/Personality';
import Language from './pages/Language';
import Interview from './pages/Interview';
import AssessmentQuestions from './dashboard/components/AssessmentQuestions';
import Earnings from './pages/Earnings';
import Matching from './pages/Matching';
import Coding from './pages/Coding';
import ScheduleInterview from './pages/ScheduleInterview';
import Notification from './dashboard/Notification';
import Progress from './pages/Progress';

const ErrorPage = React.lazy(() => import('./pages/Error'));
const Login = React.lazy(() => import('./Auth/Login'));
const Apply = React.lazy(() => import('./Auth/Apply'));
const Assessment = React.lazy(() => import('./dashboard/Assessment'));
const TrackTest = React.lazy(() => import('./dashboard/TrackTest'));
// const AssessmentQuestions = React.lazy(() => import('./dashboard/AssessmentQuestions'));

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
    path: 'apply',
    element: (
      <React.Suspense fallback={<>...</>}>
        <Apply />
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
      },
    ],
  },
  {
    path: 'notifications',
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
            <Notification />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: 'earnings',
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
            <Earnings />
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
        index: true,
        // path: 'personality',
        element: (
          <React.Suspense fallback={<>...</>}>
            {/* <Personality /> */}
            <Progress />
          </React.Suspense>
        ),
      },
      // {
      //   path: 'language',
      //   element: (
      //     <React.Suspense fallback={<>...</>}>
      //       <Language />
      //     </React.Suspense>
      //   ),
      // },
      {
        path: 'interview',
        element: (
          <React.Suspense fallback={<>...</>}>
            <Interview />
          </React.Suspense>
        ),
      },
      {
        path: 'schedule-interview',
        element: (
          <React.Suspense fallback={<>...</>}>
            <ScheduleInterview />
          </React.Suspense>
        ),
      },
      {
        path: 'matching',
        element: (
          <React.Suspense fallback={<>...</>}>
            <Matching />
          </React.Suspense>
        ),
      },
      {
        path: 'live-coding',
        element: (
          <React.Suspense fallback={<>...</>}>
            <Coding />
          </React.Suspense>
        ),
      },
      {
        path: 'assessment',
        element: (
          <React.Suspense fallback={<>...</>}>
            <ChildRoot />
          </React.Suspense>
        ),

        errorElement: (
          <React.Suspense fallback={<>...</>}>
            <ErrorPage />
          </React.Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <React.Suspense fallback={<>...</>}>
                <Assessment />
              </React.Suspense>
            ),
            errorElement: (
              <React.Suspense fallback={<>...</>}>
                <ErrorPage />
              </React.Suspense>
            ),
          },
          {
            path: ':id',
            element: (
              <React.Suspense fallback={<>...</>}>
                <ChildRoot />
              </React.Suspense>
            ),
            errorElement: (
              <React.Suspense fallback={<>...</>}>
                <ErrorPage />
              </React.Suspense>
            ),
            children: [
              {
                index: true,
                element: (
                  <React.Suspense fallback={<>...</>}>
                    <TrackTest />
                  </React.Suspense>
                ),
                errorElement: (
                  <React.Suspense fallback={<>...</>}>
                    <ErrorPage />
                  </React.Suspense>
                ),
              },

              {
                path: ':questionId',
                element: (
                  <React.Suspense fallback={<>...</>}>
                    <ChildRoot />
                  </React.Suspense>
                ),
                errorElement: (
                  <React.Suspense fallback={<>...</>}>
                    <ErrorPage />
                  </React.Suspense>
                ),
                children: [
                  {
                    index: true,
                    element: (
                      <React.Suspense fallback={<>...</>}>
                        <AssessmentQuestions />
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
            ],
          },
        ],
      },
    ],
  },
  // {
  //   path: 'progress',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Root />
  //     </React.Suspense>
  //   ),
  //   errorElement: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ErrorPage />
  //     </React.Suspense>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       path: 'personality',
  //       element: (
  //         <React.Suspense fallback={<>...</>}>
  //           <Personality />
  //         </React.Suspense>
  //       ),
  //     },
  // {
  //   path: 'language',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Language />
  //     </React.Suspense>
  //   ),
  // },
  // {
  //   path: '/progress/interview',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Interview />
  //     </React.Suspense>
  //   ),
  // },
  // {
  //   path: 'schedule-interview',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ScheduleInterview />
  //     </React.Suspense>
  //   ),
  // },
  // {
  //   path: 'matching',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Matching />
  //     </React.Suspense>
  //   ),
  // },
  // {
  //   path: 'live-coding',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Coding />
  //     </React.Suspense>
  //   ),
  // },
  // {
  //   path: 'assessment',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ChildRoot />
  //     </React.Suspense>
  //   ),

  //   errorElement: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ErrorPage />
  //     </React.Suspense>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       element: (
  //         <React.Suspense fallback={<>...</>}>
  //           <Assessment />
  //         </React.Suspense>
  //       ),
  //       errorElement: (
  //         <React.Suspense fallback={<>...</>}>
  //           <ErrorPage />
  //         </React.Suspense>
  //       ),
  //     },
  //     {
  //       path: ':id',
  //       element: (
  //         <React.Suspense fallback={<>...</>}>
  //           <ChildRoot />
  //         </React.Suspense>
  //       ),
  //       errorElement: (
  //         <React.Suspense fallback={<>...</>}>
  //           <ErrorPage />
  //         </React.Suspense>
  //       ),
  //       children: [
  //         {
  //           index: true,
  //           element: (
  //             <React.Suspense fallback={<>...</>}>
  //               <TrackTest />
  //             </React.Suspense>
  //           ),
  //           errorElement: (
  //             <React.Suspense fallback={<>...</>}>
  //               <ErrorPage />
  //             </React.Suspense>
  //           ),
  //         },

  //         {
  //           path: ':questionId',
  //           element: (
  //             <React.Suspense fallback={<>...</>}>
  //               <ChildRoot />
  //             </React.Suspense>
  //           ),
  //           errorElement: (
  //             <React.Suspense fallback={<>...</>}>
  //               <ErrorPage />
  //             </React.Suspense>
  //           ),
  //           children: [
  //             {
  //               index: true,
  //               element: (
  //                 <React.Suspense fallback={<>...</>}>
  //                   <AssessmentQuestions />
  //                 </React.Suspense>
  //               ),
  //               errorElement: (
  //                 <React.Suspense fallback={<>...</>}>
  //                   <ErrorPage />
  //                 </React.Suspense>
  //               ),
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // ],
  // },
  // {
  //   path: 'progress/language',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Root />
  //     </React.Suspense>
  //   ),
  //   errorElement: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ErrorPage />
  //     </React.Suspense>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       element: (
  //         <React.Suspense fallback={<>...</>}>
  //           <Language />
  //         </React.Suspense>
  //       ),
  //     },
  //   ],
  // },
  // {
  //   path: 'progress/interview',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Root />
  //     </React.Suspense>
  //   ),
  //   errorElement: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ErrorPage />
  //     </React.Suspense>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       element: (
  //         <React.Suspense fallback={<>...</>}>
  //           <Interview />
  //         </React.Suspense>
  //       ),
  //     },
  //   ],
  // },
  // {
  //   path: 'progress/assessment',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Root />
  //     </React.Suspense>
  //   ),
  //   errorElement: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ErrorPage />
  //     </React.Suspense>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       element: (
  //         <React.Suspense fallback={<>...</>}>
  //           <Assessment />
  //         </React.Suspense>
  //       ),
  //     },
  //   ],
  // },
  // {
  //   path: 'interview',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Interview />
  //     </React.Suspense>
  //   ),
  // },
  // {
  //   path: 'schedule-interview',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ScheduleInterview />
  //     </React.Suspense>
  //   ),
  // },
  // {
  //   path: 'matching',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Matching />
  //     </React.Suspense>
  //   ),
  // },
  // {
  //   path: 'live-coding',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Coding />
  //     </React.Suspense>
  //   ),
  // },
  // {
  //   path: 'assessment',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ChildRoot />
  //     </React.Suspense>
  //   ),

  //   errorElement: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ErrorPage />
  //     </React.Suspense>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       element: (
  //         <React.Suspense fallback={<>...</>}>
  //           <Assessment />
  //         </React.Suspense>
  //       ),
  //       errorElement: (
  //         <React.Suspense fallback={<>...</>}>
  //           <ErrorPage />
  //         </React.Suspense>
  //       ),
  //     },
  //     {
  //       path: ':id',
  //       element: (
  //         <React.Suspense fallback={<>...</>}>
  //           <ChildRoot />
  //         </React.Suspense>
  //       ),
  //       errorElement: (
  //         <React.Suspense fallback={<>...</>}>
  //           <ErrorPage />
  //         </React.Suspense>
  //       ),
  //       children: [
  //         {
  //           index: true,
  //           element: (
  //             <React.Suspense fallback={<>...</>}>
  //               <TrackTest />
  //             </React.Suspense>
  //           ),
  //           errorElement: (
  //             <React.Suspense fallback={<>...</>}>
  //               <ErrorPage />
  //             </React.Suspense>
  //           ),
  //         },

  //         {
  //           path: ':questionId',
  //           element: (
  //             <React.Suspense fallback={<>...</>}>
  //               <ChildRoot />
  //             </React.Suspense>
  //           ),
  //           errorElement: (
  //             <React.Suspense fallback={<>...</>}>
  //               <ErrorPage />
  //             </React.Suspense>
  //           ),
  //           children: [
  //             {
  //               index: true,
  //               element: (
  //                 <React.Suspense fallback={<>...</>}>
  //                   <AssessmentQuestions />
  //                 </React.Suspense>
  //               ),
  //               errorElement: (
  //                 <React.Suspense fallback={<>...</>}>
  //                   <ErrorPage />
  //                 </React.Suspense>
  //               ),
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: 'language',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Root />
  //     </React.Suspense>
  //   ),
  //   errorElement: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ErrorPage />
  //     </React.Suspense>
  //   ),
  //   children: [
  //     {
  //       path: '',
  //       element: (
  //         <React.Suspense fallback={<>...</>}>
  //           <Language />
  //         </React.Suspense>
  //       ),
  //       errorElement: (
  //         <React.Suspense fallback={<>...</>}>
  //           <ErrorPage />
  //         </React.Suspense>
  //       ),
  //     },
  //   ],
  // },
  // {
  //   path: 'interview',
  //   element: (
  //     <React.Suspense fallback={<>...</>}>
  //       <Root />
  //     </React.Suspense>
  //   ),
  //   errorElement: (
  //     <React.Suspense fallback={<>...</>}>
  //       <ErrorPage />
  //     </React.Suspense>
  //   ),
  //   children: [
  //     {
  //       path: '',
  //       element: (
  //         <React.Suspense fallback={<>...</>}>
  //           <Interview />
  //         </React.Suspense>
  //       ),
  //       errorElement: (
  //         <React.Suspense fallback={<>...</>}>
  //           <ErrorPage />
  //         </React.Suspense>
  //       ),
  //     },
  //   ],
  // },
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
