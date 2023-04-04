import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const talentsApi = createApi({
  reducerPath: 'talentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://atarchgroup.capriquota.com/api/v1/',
  }),
  endpoints: builder => ({
    getAllTalents: builder.query({
      query: name => `talent/${name}`,
    }),
  }),
});

export const { useGetAllTalentsQuery } = talentsApi;
