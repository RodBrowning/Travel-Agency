import './style.scss'

import Card from '../card'
import React from 'react'

const Cards: React.FC = () => {
   return (
      <section id="cards" className="container py-4">
         <Card imgUrl="/assets/cardImg1.png" />
         <Card imgUrl="/assets/cardImg2.png" />
         <Card imgUrl="/assets/cardImg3.png" />
      </section>
   )
}

export default Cards
