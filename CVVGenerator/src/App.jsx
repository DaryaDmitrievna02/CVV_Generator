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

<Header></Header>
     <BrowserRouter>
     <Routes>
    
      <Route path='/1' element={<GeneratorPage></GeneratorPage>}></Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
