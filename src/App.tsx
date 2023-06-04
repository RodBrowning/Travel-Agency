import './App.scss'
import './scss/fonts/Lato/stylesheet.scss'
import './scss/fonts/Cardo/stylesheet.scss'
import './scss/index.scss'

import Cards from './components/cards'
import Footer from './components/footer'
import Header from './components/header/index'
import Hero from './components/hero'
import ImgText from './components/ImgText'
import React from 'react'
import TestimonialsSlider from './components/testimonialsSlider'

const App: React.FC = () => {
   return (
      <div className="App bg-primary">
         <Header />
         <main>
            <Hero />
            <Cards />
            <ImgText />
            <TestimonialsSlider />
         </main>
         <Footer />
      </div>
   )
}

export default App
