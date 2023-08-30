export const bettingTypes = {
  V75: 'V75',
  V86: 'V86',
  GS75: 'GS75',
} as const

export type BettingType = (typeof bettingTypes)[keyof typeof bettingTypes]

export type ProductResponse = {
  betType: BettingType
  results: Result[]
}

export interface Result {
  id: string
  tracks: Track[]
  totalToWin: number
  startTime: string
  addOns: string[]
}

export interface Track {
  id: number
  name: string
}
