import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { useOtpVerifyMutation } from '../../redux-store/fetch/talentsSlice';

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

// const [
//   verifyUser,
//   {
//     data: otpData,
//     isSuccess: isVerificationSuccessful,
//     isError: isVerificationError,
//     error: verifyError,
//   },
// ] = useVerifyUserMutation(email, otp, ip);

// export const verifyOtpUser = async (userEmail, dataOtp, ip) => {
//   const valueItem = JSON.stringify({
//     email: userEmail,
//     otp: dataOtp?.join(''),
//     ipAddress: ip,
//   });
//   const [
//     verifyUser,
//     {
//       data: valueItem,
//       isSuccess: isVerificationSuccessful,
//       isError: isVerificationError,
//       error: verifyError,
//     },
//     await
//   ] = useVerifyUserMutation(email, otp, ip);

//   return await verifyOtpUser(valueItem);
// };
