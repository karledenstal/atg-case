import { bettingTypes } from '../../models/product'
import { ProductAccordion } from './ProductAccordion'

const ProductListing = () => {
  return (
    <div>
      {Object.values(bettingTypes).map((product) => (
        <ProductAccordion key={product} product={product} />
      ))}
    </div>
  )
}

export default ProductListing
