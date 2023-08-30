import format from 'date-fns/format'
import { Track } from '../../models/product'
import { useGetGameQuery } from '../../api/racingInfoApi'
import { RaceInfo } from './RaceInfo'

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
  const { data, isFetching } = useGetGameQuery(id)

  return (
    <div className="p-4">
      {tracks?.map((track) => (
        <div key={track.id}>
          <h3 className="text-2xl font-semibold">
            {track.name} - {format(new Date(startTime), 'HH:mm')}
          </h3>
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
        </div>
      ))}
    </div>
  )
}
