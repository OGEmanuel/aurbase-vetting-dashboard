import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const data = sessionStorage.getItem('data');
console.log(JSON.parse(data)?.[0].token.original.access_token);

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
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          url: 'talent/stacks',
          method: 'post',
          body,
        };
      },
    }),
    addAbout: builder.mutation({
      query: body => {
        return {
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          url: 'talent/about',
          method: 'post',
          body,
        };
      },
    }),
    passwordToken: builder.mutation({
      query: body => {
        return {
          url: 'talent/reset',
          method: 'post',
          body,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: body => {
        return {
          url: 'talent/update_password',
          method: 'post',
          headers: {
            Authorization: `Bearer${
              JSON.parse(data)?.[0].token.original.access_token
            }`,
          },
          body,
        };
      },
    }),
  }),
});

export const {
  useGetAllStacksQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifyUserMutation,
  useReVerifyUserMutation,
  useForgetPasswordMutation,
  useAddStacksMutation,
  useAddAboutMutation,
  usePasswordTokenMutation,
  useResetPasswordMutation,
} = talentsApi;
