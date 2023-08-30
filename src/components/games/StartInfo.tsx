import { useState } from 'react'
import { Driver, Horse } from '../../models/game'
import { Detail } from './Detail'

type StartInfoProps = {
  number: number
  horse: Horse
  driver: Driver
}

export const StartInfo = ({ number, horse, driver }: StartInfoProps) => {
  const [showTrainerInfo, setShowTrainerInfo] = useState(false)

  const driverFullName = `${driver.firstName} ${driver.lastName}`
  const trainerFullName = `${horse.trainer.firstName} ${horse.trainer.lastName}`

  return (
    <div className="p-4 pb-0">
      <h5
        className={`border-0 border-b-2 border-b-slate-300 cursor-pointer text-lg ${
          showTrainerInfo && 'font-semibold text-blue-900'
        }`}
        onClick={() => setShowTrainerInfo((s) => !s)}
      >
        {number} - {horse.name} - {driverFullName}
      </h5>
      {showTrainerInfo && (
        <div className="p-2">
          <Detail label="Tränare" value={trainerFullName} />
          <Detail label="Far" value={horse.pedigree.father.name} />
        </div>
      )}
    </div>
  )
}
