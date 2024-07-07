import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GeneratorPage from './components/themeGenerator/generatorPage'
import Header from './components/header/header'


function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Header></Header>}></Route>
      <Route path='/1' element={<GeneratorPage></GeneratorPage>}></Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
