import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BettingType, ProductResponse, Result } from '../models/product'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_ATG_API}/products/`,
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<Result[], BettingType>({
      query: (betType) => ({
        url: betType,
        method: 'GET',
      }),
      transformResponse: ({ results }: ProductResponse) => results,
    }),
  }),
})

export const { useGetProductQuery, useLazyGetProductQuery } = productApi
