import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useOtpVerifyMutation } from '../../redux-store/fetch/talentsSlice';

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

export const VerifyOtpVendor = async (dataEmail, dataOtp, ipAddress) => {
  const valueItem = JSON.stringify({
    email: dataEmail,
    otp: dataOtp?.join(''),
    ip: ipAddress,
  });
  return axios.post(
    `https://atarchgroup.capriquota.com/api/v1/talent/verify`,
    valueItem,
    config
  );

  // useOtpVerifyMutation;
};
