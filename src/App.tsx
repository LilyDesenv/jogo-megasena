import { Provider } from 'react-redux'
import Home from './Home'
import { GlobalCSS } from './styles'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalCSS />
      <Home />
    </Provider>
  )
}

export default App
