import { bettingTypes } from '../../models/product'
import { ProductAccordion } from './ProductAccordion'

const ProductListing = () => {
  return (
    <>
      {Object.values(bettingTypes).map((product) => (
        <ProductAccordion key={product} product={product} />
      ))}
    </>
  )
}

export default ProductListing
