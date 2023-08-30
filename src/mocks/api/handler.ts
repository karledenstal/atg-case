import { rest } from 'msw'

export const handlers = [
  rest.get(import.meta.env.VITE_ATG_API, (_, res, ctx) => {
    // successful response
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'Xabi Alonzo' },
        { id: 2, name: 'Lionel Messi' },
        { id: 3, name: 'Lionel Love' },
        { id: 4, name: 'Lionel Poe' },
        { id: 5, name: 'Lionel Gink' },
      ]),
      ctx.delay(30),
    )
  }),
]
