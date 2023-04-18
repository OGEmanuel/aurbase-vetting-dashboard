import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const talentProfileApi = createApi({
  reducerPath: 'talentProfileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '127.0.01:8000/api/v1/talent',
  }),
  endpoints: builder => ({
    addStacks: builder.mutation({
      query: body => {
        return {
          url: '/stacks',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const { useAddStacksMutation } = talentProfileApi;
