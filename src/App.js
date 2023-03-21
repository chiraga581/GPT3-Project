import React from 'react'
import {Footer,Blog,Features,WhatGPT3,Possibility,Header} from './container'
import {Article,Brand,Feature,Cta,Navbar} from './components'
import './App.css';


const App = () => {
  return (
    <div className='App'>

      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand></Brand>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App