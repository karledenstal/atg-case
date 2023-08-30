import format from 'date-fns/format'
import { Track } from '../../models/product'
import { useGetGameQuery } from '../../api/racingInfoApi'

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
                {data?.map((race) => (
                  <>
                    <h4 className="text-xl pt-2 font-semibold">
                      {race.number} - {race.name} -{' '}
                      {format(new Date(race.startTime), 'HH:mm')}
                    </h4>
                    <div>
                      {race.starts.map((start) => (
                        <>
                          <h5>
                            {start.number} - {start.horse.name} -{' '}
                            {start.driver.firstName} {start.driver.lastName}
                          </h5>
                          <div>
                            Tränare: {start.horse.trainer.firstName}{' '}
                            {start.horse.trainer.lastName}
                            <br />
                            Far: {start.horse.pedigree.father.name}
                          </div>
                        </>
                      ))}
                    </div>
                  </>
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
