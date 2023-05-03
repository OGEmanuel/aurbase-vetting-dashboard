import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const talentsApi = createApi({
  reducerPath: 'talentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://atarchgroup.capriquota.com/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      const {
        authToken: { token },
      } = getState();
      // console.log('states: ', token);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),

  endpoints: builder => ({
    getAllStacks: builder.query({
      query: () => `talent/stacks`,
    }),
    loginUser: builder.mutation({
      query: body => {
        return {
          url: 'talent/login',
          method: 'post',
          body,
        };
      },
    }),
    registerUser: builder.mutation({
      query: body => {
        return {
          url: 'talent/register',
          method: 'post',
          body,
        };
      },
    }),
    verifyUser: builder.mutation({
      query: body => {
        return {
          url: 'talent/verify',
          method: 'post',
          body,
        };
      },
    }),
    reVerifyUser: builder.mutation({
      query: body => {
        return {
          url: 'talent/resend-verification',
          method: 'post',
          body,
        };
      },
    }),
    forgetPassword: builder.mutation({
      query: body => {
        return {
          url: 'talent/forgot',
          method: 'post',
          body,
        };
      },
    }),
    addStacks: builder.mutation({
      query: body => {
        // console.log(body);
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          url: 'talent/stacks',
          // url: 'https://dummy.restapiexample.com/api/v1/create',
          method: 'post',
          body,
        };
      },
    }),
    addAbout: builder.mutation({
      query: body => {
        // console.log(body);
        return {
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          url: 'talent/about',
          // url: 'https://dummy.restapiexample.com/api/v1/create',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

// const baseQueryWithAuth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.originalStatus === 401) {
//     console.log('sending refresh token');

//     // send refresh token to get new access token
//     const refreshResult = await baseQuery('/refresh', api, extraOptions);
//     console.log(refreshResult);
//     if (refreshResult?.data) {
//       const user = api.getState().authToken.token;
//       // Store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data, user }));
//       // retry the originam query with new access token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       // api.dispatch(logOut())
//       console.log('Does not work');
//     }
//   }

//   return result;
// };

// export const apiSlice = createApi({
//   baseQuery: baseQueryWithAuth,
//   endpoints: builder => ({}),
// });

export const {
  useGetAllStacksQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifyUserMutation,
  useReVerifyUserMutation,
  useForgetPasswordMutation,
  useAddStacksMutation,
  useAddAboutMutation,
} = talentsApi;
