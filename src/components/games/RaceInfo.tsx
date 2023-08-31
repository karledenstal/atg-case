import format from 'date-fns/format'
import { Start } from '../../models/game'
import { StartInfo } from './StartInfo'
import { timeFormat } from '../../utils'
import { ExpandIcon } from '../ExpandIcon'
import { useAccordion } from '../../hooks/useAccordion'

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
  const { isExpanded, handleAccordionToggle } = useAccordion()

  return (
    <>
      <h4
        onClick={handleAccordionToggle}
        className={`flex items-center justify-between text-xl border-x-0 border-y-0 border-b-2 border-slate-300 border-solid p-2 cursor-pointer ${
          isExpanded && 'font-semibold'
        }`}
      >
        <div>
          <span className="mr-1">
            {number} - {name ?? 'Okänt namn'}
          </span>
          - {format(new Date(startTime), timeFormat)}
        </div>
        <ExpandIcon isExpanded={isExpanded} />
      </h4>
      {isExpanded &&
        starts.map(({ horse, driver, number }) => (
          <StartInfo
            key={number}
            number={number}
            driver={driver}
            horse={horse}
          />
        ))}
    </>
  )
}
