import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar'
import Login from './assets/Components/Login'
import Signup from './assets/Components/Signup'
import {BrowserRouter} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './assets/Components/Home'
import Crud from './assets/Components/Crud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Navbar/>}/>
   
   <Route path="/Login"  element={<Login/>}/>
   <Route path="/Signup"  element={<Signup/>}/>
   <Route path="/Home"  element={<Home/>}/>
   <Route path="/Crud" element={<Crud/>}/>
   </Routes>
   </BrowserRouter>


   
    </>
  )
}

export default App
