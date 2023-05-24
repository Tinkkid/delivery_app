import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://646cc2357b42c06c3b2bf569.mockapi.io/api/delivery',
  }),
  tagTypes: ['Menu'],
  endpoints: builder => ({
    fetchMenu: builder.query({
      query: () => `/menu`,
      providesTags: ['Menu'],
    }),
    deleteOrder: builder.mutation({
      query: id => ({
        url: `/menu/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Menu'],
    }),
  }),
});

export const { useFetchMenuQuery, useDeleteOrderMutation } = menuApi;
