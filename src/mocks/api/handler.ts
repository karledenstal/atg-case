import { rest } from 'msw'
import { resultMock } from '../data/product.mock'
import { raceMock } from '../data/game.mock'

export const handlers = [
  rest.get(
    'https://www.atg.se/services/racinginfo/v1/api/products/V75',
    (_, res, ctx) => {
      // successful response
      return res(ctx.status(200), ctx.json(resultMock), ctx.delay(30))
    },
  ),
  rest.get(
    'https://www.atg.se/services/racinginfo/v1/api/games/V75_2023-08-22_7_5',
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(raceMock), ctx.delay(30))
    },
  ),
]
