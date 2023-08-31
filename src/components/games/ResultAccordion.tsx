import format from 'date-fns/format'
import { Track } from '../../models/product'
import { RaceInfo } from './RaceInfo'
import { timeFormat } from '../../utils'
import { useLazyGetGameQuery } from '../../api/gameApi'
import { ExpandIcon } from '../ExpandIcon'
import { useAccordion } from '../../hooks/useAccordion'

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
  const [fetchRaces, { data, isFetching, isError }] = useLazyGetGameQuery()
  const { isExpanded, handleAccordionToggle } = useAccordion()

  const onToggle = () => {
    handleAccordionToggle()

    if (isExpanded) return
    fetchRaces(id)
  }

  const displayRaces = () => {
    if (isError) return 'Oops, something went wrong'
    if (isFetching) return 'Loading...'
    if (!data) return 'No races found'

    return data?.map(({ number, starts, startTime, name }) => (
      <RaceInfo
        key={number}
        number={number}
        name={name}
        startTime={startTime}
        starts={starts}
      />
    ))
  }

  return (
    <div className="mb-2">
      <h3
        onClick={onToggle}
        className="p-2 border-0 border-b-slate-300 border-b-2 cursor-pointer text-2xl font-semibold flex items-center justify-between"
      >
        <div>
          {tracks?.map((track) => (
            <span
              key={track.id}
              className="inline-block mr-1 after:content-[','] last-of-type:after:content-['']"
            >
              {track.name}
            </span>
          ))}
          - {format(new Date(startTime), timeFormat)}
        </div>
        <ExpandIcon isExpanded={isExpanded} />
      </h3>
      {isExpanded && displayRaces()}
    </div>
  )
}
