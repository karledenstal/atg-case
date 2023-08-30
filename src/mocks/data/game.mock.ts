import { GameResponse } from '../../models/game'

export const raceMock: GameResponse = {
  '@type': '.Game',
  id: 'V75_2023-08-22_7_5',
  races: [
    {
      id: '2023-09-02_7_5',
      name: "Testlopp",
      date: '2023-09-02',
      number: 5,
      startTime: '2023-09-02T16:20:00',
      starts: [
        {
          number: 1,
          driver: {
            firstName: 'Jorma',
            lastName: 'Kontio',
          },
          horse: {
            name: 'Chili',
            trainer: {
              firstName: 'Jörgen',
              lastName: 'Westholm',
            },
            pedigree: {
              father: {
                name: 'Chocolatier',
                nationality: 'US',
              },
              mother: {
                name: 'Chocolatier',
                nationality: 'US',
              },
            },
          },
        },
      ],
    },
  ],
}
