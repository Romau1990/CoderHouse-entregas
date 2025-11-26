import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {Home, Contact, Store} from "../src/WebPages/Index/Index"



function App() {  

  return (
    <div>
      <Home></Home>
      <Store></Store>
      <Contact></Contact>
    </div>
  )
}

export default App
