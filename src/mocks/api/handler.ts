import { rest } from 'msw'
import { resultMock } from '../data/product.mock'
import { raceMock } from '../data/game.mock'

export const handlers = [
  rest.get(
    `${import.meta.env.VITE_ATG_API}/products/*`,
    (_, res, ctx) => {
      // successful response
      return res(ctx.status(200), ctx.json(resultMock), ctx.delay(30))
    },
  ),
  rest.get(
    `${import.meta.env.VITE_ATG_API}/games/*`,
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(raceMock), ctx.delay(30))
    },
  ),
]
