import { BettingType } from '../../models/product'
import { ResultAccordion } from '../games/ResultAccordion'
import { useLazyGetProductQuery } from '../../api/productApi'
import { ExpandIcon } from '../ExpandIcon'
import { useAccordion } from '../../hooks/useAccordion'

type ProductAccordionProps = {
  product: BettingType
}

export const ProductAccordion = ({ product }: ProductAccordionProps) => {
  const [fetchResults, { isFetching, data, isError }] = useLazyGetProductQuery()
  const { isExpanded, handleAccordionToggle } = useAccordion()

  const onToggle = () => {
    handleAccordionToggle()

    if (isExpanded) return
    fetchResults(product)
  }

  const renderResults = () => {
    if (isError) return 'Oops, something went wrong'
    if (isFetching) return 'Loading...'
    if (!data) return 'No results found'

    return data?.map(({ id, startTime, tracks }) => (
      <ResultAccordion key={id} id={id} startTime={startTime} tracks={tracks} />
    ))
  }

  return (
    <>
      <div className="p-2 mb-2 border-solid border-2 border-blue-900 cursor-pointer">
        <h2
          className="flex justify-between items-center text-4xl font-bold"
          onClick={onToggle}
        >
          {product}
          <ExpandIcon isExpanded={isExpanded} />
        </h2>
      </div>
      {isExpanded && renderResults()}
    </>
  )
}
