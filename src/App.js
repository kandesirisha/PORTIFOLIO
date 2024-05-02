import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './portfolio/header'
import Home from './portfolio/home'
import "./App.css"
import Contact from './portfolio/contact'
import Edu from './portfolio/education'
import Experince from './portfolio/experince'
import Project from './portfolio/project'
const App = () => {

  return (
    <div>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route  path='/contact' element={<Contact/>}/>
  <Route path='/education' element={<Edu/>}/>
  <Route path='/experince' element={<Experince/>}/>
  <Route path='/project' element={<Project/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
