import { bettingTypes } from '../../models/product'
import { ProductAccordion } from './ProductAccordion'

const ProductListing = () => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {Object.values(bettingTypes).map((product) => (
        <ProductAccordion key={product} product={product} />
      ))}
    </div>
  )
}

export default ProductListing
