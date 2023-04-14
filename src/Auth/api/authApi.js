import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://atarchgroup.capriquota.com/api/v1/talent',
  }),
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: body => {
        return {
          url: '/login',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;

export const verifyOtpUser = async (userEmail, dataOtp, ip) => {
  const valueItem = JSON.stringify({
    email: userEmail,
    otp: dataOtp?.join(''),
    ipAddress: ip,
  });

  // return await verify
};
