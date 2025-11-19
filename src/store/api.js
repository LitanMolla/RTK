import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://krishilink-api.vercel.app' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `crops`,
    }),
  }),
})

export const { useGetProductsQuery } = productsApi