import { useState } from 'react'
import { Driver, Horse } from '../../models/game'

type StartInfoProps = {
  number: number
  horse: Horse
  driver: Driver
}

export const StartInfo = ({ number, horse, driver }: StartInfoProps) => {
  const [showTrainerInfo, setShowTrainerInfo] = useState(false)

  return (
    <div className="p-4 pb-0">
      <h5
        className={`border-0 border-b-2 border-b-slate-300 cursor-pointer text-lg ${
          showTrainerInfo && 'font-semibold text-blue-900'
        }`}
        onClick={() => setShowTrainerInfo((s) => !s)}
      >
        {number} - {horse.name} - {driver.firstName} {driver.lastName}
      </h5>
      {showTrainerInfo && (
        <div className="p-2">
          <p>
            <strong className="font-semibold">Tränare:</strong>{' '}
            {horse.trainer.firstName} {horse.trainer.lastName}
          </p>
          <p>
            <strong className="font-semibold">Far:</strong>{' '}
            {horse.pedigree.father.name}
          </p>
        </div>
      )}
    </div>
  )
}
