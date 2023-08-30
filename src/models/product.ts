export const bettingTypes = {
  V75: 'V75',
  V86: 'V86',
  GS75: 'GS75',
} as const

export type BettingType = (typeof bettingTypes)[keyof typeof bettingTypes]

export type ProductResponse = {
  betType: BettingType
  upcoming: Upcoming[]
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

export interface Upcoming {
  id: string
  newBettingSystem: boolean
  startTime: string
  tracks: Track[]
  favorites: Favorite[]
  addOns: string[]
  races: Race[]
  bettable: boolean
}

export interface Favorite {
  raceId: string
  legNumber: number
  start: FavoriteStart
}

export interface FavoriteStart {
  number: number
  name: string
  distribution: number
}

export interface Race {
  id: string
  starts: StartElement[]
}

export interface StartElement {
  number: number
  horse: Horse
}

export interface Horse {
  name: string
}
