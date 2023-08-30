import { Provider } from 'react-redux'
import ProductListing from './components/products/ProductListing'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <ProductListing />
    </Provider>
  )
}

export default App
