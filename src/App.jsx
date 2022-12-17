import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from '@material-tailwind/react'
import NavMenu from './Component/NavMenu/NavMenu'
import { Route, Routes } from 'react-router-dom'
import Featured from './Component/Featured/Featured'
import Cart from './Component/Cart/Cart'
import Home from './Component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
