import { GameResponse } from '../../models/game'

export const raceMock: GameResponse = {
  '@type': '.Game',
  id: 'V75_2023-08-22_7_5',
  races: [
    {
      id: '2023-09-02_7_5',
      name: "John Scott's - STL Stoeliten, Försök 11 (Final Solvalla 26 december)",
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
            name: 'B.W.L.Chili',
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
