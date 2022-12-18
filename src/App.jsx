import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from '@material-tailwind/react'
import NavMenu from './Component/NavMenu/NavMenu'
import { Route, Routes } from 'react-router-dom'
import Featured from './Component/Featured/Featured'
import Cart from './Component/Cart/Cart'
import Home from './Component/Home/Home'
import { Provider } from 'react-redux'
import store from './Component/Redux/store'
import Footer from './Component/Footer/Footer'
import WishList from './Component/WishList/WishList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className="">
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
        <Footer/>
      </div>
    </Provider>
  )
}

export default App
