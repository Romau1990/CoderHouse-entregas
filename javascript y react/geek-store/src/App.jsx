import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {Home, Contact, Store} from "../src/WebPages/Index/Index"
import CartWidget from './WebPages/Components/CartWidget/CartWidget'



function App() {  

  return (
    <div>
      <Home></Home>
      <Store></Store>
      <Contact></Contact>
      <CartWidget></CartWidget>
    </div>
  )
}

export default App
