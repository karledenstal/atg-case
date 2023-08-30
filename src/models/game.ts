export type GameResponse = {
  '@type': string
  id: string
  races: Race[]
}

export interface Race {
  id: string
  date: string
  number: number
  name: string
  startTime: string
  starts: Start[]
}

export interface MergedPool {
  name: string
  betTypes: string[]
}

export interface RacePools {
  vinnare: PurpleVinnare
  plats: PurplePlats
  tvilling: Komb
  komb: Komb
  trio: Komb
  V75: PurpleV75
}

export interface PurpleV75 {
  '@type': string
  result: V75Result
}

export interface V75Result {
  '@type': string
  systems: string
  value: Value
  winners: number[]
  reserveOrder: number[]
}

export interface Value {
  amount: number
}

export interface Komb {
  '@type': string
  id: string
  status: string
  timestamp: string
  turnover: number
  result: KombResult
}

export interface KombResult {
  '@type': string
  winners: WinnerElement[]
}

export interface WinnerElement {
  combination: number[]
  odds: number
}

export interface PurplePlats {
  '@type': string
  id: string
  status: string
  timestamp: string
  turnover: number
  result?: PlatsResult
}

export interface PlatsResult {
  '@type': string
  winners: Winners
}

export interface Winners {
  first: PurpleWinner[]
  second: PurpleWinner[]
  third: PurpleWinner[]
}

export interface PurpleWinner {
  number: number
  odds: number
}

export interface PurpleVinnare {
  '@type': string
  id: string
  status: string
  timestamp: string
  turnover: number
  result?: VinnareResult
}

export interface VinnareResult {
  '@type': string
  winners: PurpleWinner[]
}

export interface Start {
  number: number
  horse: Horse
  driver: Driver
}

export interface Driver {
  firstName: string
  lastName: string
}

export interface HomeTrack {
  id?: number
  name: string
  location?: string
}

export interface DriverStatistics {
  years: { [key: string]: Year }
}

export interface Year {
  starts: number
  earnings: number
  placement: { [key: string]: number }
  winPercentage?: number
  records?: YearRecord[]
}

export interface YearRecord {
  code: string
  startMethod: string
  distance: string
  time: Time
  place?: number
}

export interface Time {
  minutes: number
  seconds: number
  tenths: number
}

export interface Horse {
  name: string
  trainer: Driver
  pedigree: Pedigree
}

export interface Pedigree {
  father: PedigreeChild
  mother: PedigreeChild
  grandfather?: PedigreeChild
}

export interface PedigreeChild {
  name: string
  id?: number
  nationality?: string
}

export interface Shoes {
  reported: boolean
  front: Back
  back: Back
}

export interface Back {
  hasShoe: boolean
}

export interface HorseStatistics {
  years: { [key: string]: Year }
  life: Life
  lastFiveStarts: LastFiveStarts
}

export interface LastFiveStarts {
  averageOdds: number
}

export interface Life {
  starts: number
  earnings: number
  placement: { [key: string]: number }
  records: LifeRecord[]
  winPercentage: number
  placePercentage: number
  earningsPerStart: number
  startPoints: number
}

export interface LifeRecord {
  code: string
  startMethod: string
  distance: string
  time: Time
  place: number
  year: string
}

export interface Sulky {
  reported: boolean
  type: Type
  colour?: Type
}

export interface Type {
  code: string
  text: string
  engText: string
  changed: boolean
}

export interface StartPools {
  vinnare: FluffyVinnare
  plats: FluffyPlats
  V75: FluffyV75
}

export interface FluffyV75 {
  '@type': string
  betDistribution: number
}

export interface FluffyPlats {
  '@type': string
  minOdds: number
  maxOdds: number
  odds?: number
}

export interface FluffyVinnare {
  '@type': string
  odds: number
  finalOdds?: number
}

export interface StartResult {
  place?: number
  kmTime?: Time
  finalOdds: number
  startNumber: number
}

export interface Video {
  mediaId: string
  timestamp: string
}

export interface Track {
  id: number
  name: string
  countryCode: string
}
