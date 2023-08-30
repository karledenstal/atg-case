import { useState } from 'react'
import { useLazyGetProductQuery } from '../../api/racingInfoApi'
import { BettingType } from '../../models/product'
import { ResultAccordion } from '../games/ResultAccordion'

type ProductAccordionProps = {
  product: BettingType
}

export const ProductAccordion = ({ product }: ProductAccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [fetchResults, { isFetching, data }] = useLazyGetProductQuery()

  const onToggle = () => {
    setIsExpanded((s) => !s)
    fetchResults(product)
  }

  const renderResults = () => {
    if (!data) return "No results found"
    return data?.map(({ id, startTime, tracks }) => (
      <ResultAccordion id={id} startTime={startTime} tracks={tracks} />
    ))
  }

  return (
    <div style={{ cursor: 'pointer' }}>
      <h2 className="text-4xl font-bold" onClick={onToggle}>{product}</h2>
      {isExpanded && <div>{!isFetching ? renderResults() : 'Loading...'}</div>}
    </div>
  )
}
