import { ProductResponse } from '../../models/product'

export const resultMock: ProductResponse = {
  betType: 'V75',
  results: [
    {
      id: 'V75_2023-08-27_55_6',
      tracks: [
        {
          id: 55,
          name: 'Charlottenlund',
        },
      ],
      totalToWin: 1225269500,
      startTime: '2023-08-27T15:01:28',
      addOns: ['boost'],
    },
  ],
}
