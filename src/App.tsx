import Header from './components/Header'
import Preparation from './components/Preparation'
import Ingredients from './components/Ingredients'
import Instruction from './components/Instruction'
import Nutrition from './components/Nutrition'


import "./App"

function App() {
  return <div className='sm:min-h-dvh sm:grid sm:place-content-center sm:p-2 items-center bg-neutral-Eggshell'>
    <div className='sm:max-w-3xl items-center justify-center xxl:p-9 rounded-xl bg-neutral-White'>
    <Header />
    <Preparation />
    <Ingredients/>
    <Instruction/>
    <Nutrition/>
    </div>
    </div>
  
}

export default App
