import Layout from './components/Layout/Layout'
import './App.css'
import { store as createStore} from './redux/store';
import { Provider } from 'react-redux';
import StateTransfer from './components/StateTransfer/stateTransfer';
import { configs } from './config';
import Info from './components/InfoComponent/Info';
import Home from './components/Home/Home';
import AllRoutes from './components/Router/AllRoutes';
import Counter from './components/Counter/Counter';
function App() {
  const store = createStore;
  return (
    <div className="App">
      {/* <Info />
      <h1 className='bg-info rounded p-3 text-light border border-light shadow '>Ashwin's Typescript Redux</h1>
      <Home />
      <img className='my-5  ' src={configs.layoutBanner} />
      <Provider store={store}>
      <StateTransfer trigger={trigger} />
    </Provider> */}
      <Provider store={store} >
      <h1 className='bg-info rounded p-3 text-light border border-light shadow '>Ashwin's Typescript Redux</h1>
      <Home />
        <AllRoutes />
        <img className='my-5  ' src={configs.layoutBanner} />
      </Provider>
    </div>
  )
}

export default App
