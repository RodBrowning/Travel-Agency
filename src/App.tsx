import './App.scss'
import './scss/fonts/Lato/stylesheet.scss'
import './scss/fonts/Cardo/stylesheet.scss'
import './scss/index.scss'

import Cards from './components/cards'
import Header from './components/header/index'
import Hero from './components/hero'
import ImgText from './components/ImgText'
import React from 'react'

const App: React.FC = () => {
   return (
      <div className="App bg-primary">
         <Header />
         <Hero />
         <Cards />
         <ImgText />
         {/* main */}
         {/* footer */}
      </div>
   )
}

export default App
