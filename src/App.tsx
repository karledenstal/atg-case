import { Provider } from 'react-redux'
import { store } from './store'
import { bettingTypes } from './models/product'
import { ProductAccordion } from './components/products/ProductAccordion'

function App() {
  return (
    <Provider store={store}>
      {Object.values(bettingTypes).map((product) => (
        <ProductAccordion key={product} product={product} />
      ))}
    </Provider>
  )
}

export default App
