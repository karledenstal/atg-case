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
export interface Start {
  number: number
  horse: Horse
  driver: Driver
}

export interface Driver {
  firstName: string
  lastName: string
}

export interface Horse {
  name: string
  trainer: Driver
  pedigree: Record<string, Pedigree>
}

export interface Pedigree {
  name: string
  id?: number
  nationality?: string
}
