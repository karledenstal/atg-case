import format from 'date-fns/format'
import { Start } from '../../models/game'
import { StartInfo } from './StartInfo'
import { useState } from 'react'
import { timeFormat } from '../../utils'

type RaceInfoProps = {
  number: number
  name?: string
  startTime: string
  starts: Start[]
}

export const RaceInfo = ({
  number,
  name,
  startTime,
  starts,
}: RaceInfoProps) => {
  const [showStarts, setShowStarts] = useState(false)

  return (
    <>
      <h4
        onClick={() => setShowStarts((s) => !s)}
        className={`text-xl border-x-0 border-y-0 border-b-2 border-slate-300 border-solid p-2 cursor-pointer ${
          showStarts && 'font-semibold'
        }`}
      >
        <span className="mr-1">
          {number} - {name ?? 'Okänt namn'}
        </span>
        <span>- {format(new Date(startTime), timeFormat)}</span>
      </h4>
      {showStarts && (
        <div>
          {starts.map(({ horse, driver, number }) => (
            <StartInfo
              key={number}
              number={number}
              driver={driver}
              horse={horse}
            />
          ))}
        </div>
      )}
    </>
  )
}
