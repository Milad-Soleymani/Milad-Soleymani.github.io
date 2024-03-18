import React from 'react'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Project'


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './components/footer'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App