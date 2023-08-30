import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GameResponse, Race } from '../models/game'

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_ATG_API}/games/`,
  }),
  endpoints: (builder) => ({
    getGame: builder.query<Race[], string>({
      query: (id) => ({
        url: id,
        method: 'GET',
      }),
      transformResponse: ({ races }: GameResponse) => races,
    }),
  }),
})

export const { useGetGameQuery, useLazyGetGameQuery } = gameApi
