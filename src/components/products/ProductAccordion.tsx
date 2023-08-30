import { useState } from 'react'
import { useLazyGetProductQuery } from '../../api/racingInfoApi'
import { BettingType } from '../../models/product'
import { ResultAccordion } from '../games/ResultAccordion'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

type ProductAccordionProps = {
  product: BettingType
}

export const ProductAccordion = ({ product }: ProductAccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [fetchResults, { isFetching, data }] = useLazyGetProductQuery()

  const onToggle = () => {
    setIsExpanded((s) => !s)

    if (isExpanded) return
    fetchResults(product)
  }

  const renderResults = () => {
    if (!data) return 'No results found'
    
    return data?.map(({ id, startTime, tracks }) => (
      <ResultAccordion key={id} id={id} startTime={startTime} tracks={tracks} />
    ))
  }

  const renderChevron = () => {
    if (isExpanded) return <ChevronUpIcon className="inline-block w-6 h-6" />
    return <ChevronDownIcon className="inline-block w-6 h-6" />
  }

  return (
    <>
      <div className="p-2 mb-2 border-solid border-2 border-blue-900 cursor-pointer">
        <h2
          className="flex justify-between items-center text-4xl font-bold"
          onClick={onToggle}
        >
          {product}
          {renderChevron()}
        </h2>
      </div>
      {isExpanded && <>{!isFetching ? renderResults() : 'Loading...'}</>}
    </>
  )
}
