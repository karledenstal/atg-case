import format from 'date-fns/format'
import { Track } from '../../models/product'
import { useLazyGetGameQuery } from '../../api/racingInfoApi'
import { RaceInfo } from './RaceInfo'
import { useState } from 'react'
import { timeFormat } from '../../utils'

type ResultAccordionProps = {
  id: string
  startTime: string
  tracks: Track[]
}

export const ResultAccordion = ({
  id,
  startTime,
  tracks,
}: ResultAccordionProps) => {
  const [displayRace, setDisplayRace] = useState(false)
  const [fetchRaces, { data, isFetching }] = useLazyGetGameQuery()

  const onToggle = () => {
    setDisplayRace((s) => !s)

    if (displayRace) return
    fetchRaces(id)
  }

  return (
    <div className="mb-2">
      <h3
        onClick={onToggle}
        className="p-2 border-0 border-b-slate-300 border-b-2 cursor-pointer text-2xl font-semibold"
      >
        {tracks?.map((track) => (
          <span
            key={track.id}
            className="inline-block mr-1 after:content-[','] last-of-type:after:content-['']"
          >
            {track.name}
          </span>
        ))}
        - {format(new Date(startTime), timeFormat)}
      </h3>
      {displayRace &&
        (!isFetching
          ? data?.map(({ number, starts, startTime, name }) => (
              <RaceInfo
                key={number}
                number={number}
                name={name}
                startTime={startTime}
                starts={starts}
              />
            ))
          : 'Loading...')}
    </div>
  )
}
