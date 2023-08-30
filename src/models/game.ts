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
interface Start {
  number: number
  horse: Horse
  driver: Driver
}

interface Driver {
  firstName: string
  lastName: string
}

interface Horse {
  name: string
  trainer: Driver
  pedigree: Record<string, Pedigree>
}

interface Pedigree {
  name: string
  id?: number
  nationality?: string
}
