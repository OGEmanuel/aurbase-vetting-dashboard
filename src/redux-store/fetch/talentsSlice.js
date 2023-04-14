import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const talentsApi = createApi({
  reducerPath: 'talentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://atarchgroup.capriquota.com/api/v1/',
  }),
  endpoints: builder => ({
    getAll: builder.query({
      query: name => `talent/${name}`,
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
    otpVerify: builder.mutation({
      query: body => {
        return {
          url: 'talent/verify',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const {
  useGetAllQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useOtpVerifyMutation,
} = talentsApi;
