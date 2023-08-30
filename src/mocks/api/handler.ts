import { rest } from 'msw'
import { resultMock } from '../data/product.mock'
import { raceMock } from '../data/game.mock'

export const handlers = [
  rest.get(
    'https://www.atg.se/services/racinginfo/v1/api/products/*',
    (_, res, ctx) => {
      // successful response
      return res(ctx.status(200), ctx.json(resultMock), ctx.delay(30))
    },
  ),
  rest.get(
    'https://www.atg.se/services/racinginfo/v1/api/games/*',
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(raceMock), ctx.delay(30))
    },
  ),
]
