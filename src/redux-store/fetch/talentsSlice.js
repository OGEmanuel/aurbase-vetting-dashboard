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
        headers.set('Authorization', `Bearer ${JSON.parse(token)}`);
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
    addStacks: builder.mutation({
      query: body => {
        return {
          url: 'talent/stacks',
          method: 'post',
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
  useAddStacksMutation,
} = talentsApi;
