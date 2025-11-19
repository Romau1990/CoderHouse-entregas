
import { useState } from 'react'
import './App.css'
import Box from './Box/Box.jsx'
import Promesas from './Promesas/Promesas.jsx'
import Map from './Map/Map.jsx'
import ToDoList from './ToDoList/ToDoList.jsx'
import YugiohApi from './YugiohApi/yugiohApi.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* herramienta fakeStore API */}
          {/* asi luce un enrutamiento de componente */}
          {/* <Route path="/" element={<Home />} />  */}
          {/* <Route path="/about" element={<About />} /> */}

          <Route />

        {/* <Box cont="container">
          <h1>Titulo</h1>
          <div>
          <p>Parrafo</p>
          <img src="#" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam dolor, aliquam consequuntur laudantium commodi illo a magnam perferendis. Culpa?</p>
          </div>
        </Box> */}

        {/* <Promesas  /> */}

        {/* {/* <Map /> */}
        {/* <ToDoList /> */ }

        {/* <RefListPres /> */}
        </Routes>

        <YugiohApi />
      </BrowserRouter>
    </>
  )
}

export default App
