import format from 'date-fns/format'
import { Start } from '../../models/game'
import { StartInfo } from './StartInfo'
import { useState } from 'react'

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
        className={`text-xl mb-2 border-l-0 border-t-0 border-r-0 border-b-blue-900 border-solid border-2 pt-2 cursor-pointer ${
          showStarts && 'font-semibold'
        }`}
      >
        {number} - {name ? name : 'Okänt namn'} -
        {format(new Date(startTime), 'HH:mm')}
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
