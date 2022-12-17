import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from '@material-tailwind/react'
import NavMenu from './Component/NavMenu/NavMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavMenu/>
      <h1 className='text-red-500'>Hello</h1>
      <Button>Button</Button>
    </div>
  )
}

export default App
