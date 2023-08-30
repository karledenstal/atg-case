import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BettingType, ProductResponse, Result } from '../models/product'
import { GameResponse, Race } from '../models/game'

export const racingInfoApi = createApi({
  reducerPath: 'racingInfoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_ATG_API,
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<Result[], BettingType>({
      query: (betType) => ({
        url: `/products/${betType}`,
        method: 'GET',
      }),
      transformResponse: ({ results }: ProductResponse) => results,
    }),
    getGame: builder.query<Race[], string>({
      query: (id) => ({
        url: `/games/${id}`,
        method: 'GET',
      }),
      transformResponse: ({ races }: GameResponse) => races,
    }),
  }),
})

export const {
  useGetGameQuery,
  useGetProductQuery,
  useLazyGetGameQuery,
  useLazyGetProductQuery,
} = racingInfoApi
