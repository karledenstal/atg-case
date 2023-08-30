import { rest } from 'msw'
import { resultMock } from '../data/product.mock'

export const handlers = [
  rest.get(
    'https://www.atg.se/services/racinginfo/v1/api/products/V75',
    (req, res, ctx) => {
      // successful response
      return res(ctx.status(200), ctx.json([resultMock]), ctx.delay(30))
    },
  ),
  rest.get(
    'https://www.atg.se/services/racinginfo/v1/api/games/V75_2023-08-22_7_5',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}), ctx.delay(30))
    },
  ),
]
