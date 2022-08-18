import Layout from './components/Layout/Layout'
import './App.css'
import { store as createStore} from './redux/store';
import { Provider } from 'react-redux';
import StateTransfer from './components/StateTransfer/stateTransfer';
import { useState } from 'react';
import { configs } from './config';
import Info from './components/InfoComponent/Info';
function App() {
  const store = createStore;
  const [trigger,setTrigger] = useState(false);
  return (
    <div className="App">
      <Info />
      <h1 className='bg-info rounded p-3 text-light border border-light shadow '>Ashwin's Typescript Redux</h1>
      <img className='my-5  ' src={configs.layoutBanner} />
      <Provider store={store}>
      <Layout trigger={trigger} setTrigger={setTrigger} />
      <StateTransfer trigger={trigger} />
      </Provider>
    </div>
  )
}

export default App
