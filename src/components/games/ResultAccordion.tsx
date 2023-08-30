import format from 'date-fns/format'
import { Track } from '../../models/product'
import { useGetGameQuery } from '../../api/racingInfoApi'
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
  const { data, isFetching } = useGetGameQuery(id)

  return (
    <div className="p-2">
      <h3
        onClick={() => setDisplayRace((s) => !s)}
        className="cursor-pointer text-2xl font-semibold"
      >
        {tracks?.map((track) => (
          <span className="inline-block mr-1 after:content-[','] last-of-type:after:content-['']">
            {track.name}
          </span>
        ))}
        - {format(new Date(startTime), timeFormat)}
      </h3>
      {displayRace && (
        <div>
          {!isFetching ? (
            <>
              {data?.map(({ number, starts, startTime, name }) => (
                <RaceInfo
                  number={number}
                  name={name}
                  startTime={startTime}
                  starts={starts}
                />
              ))}
            </>
          ) : (
            'Loading...'
          )}
        </div>
      )}
    </div>
  )
}
