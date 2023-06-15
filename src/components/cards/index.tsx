import './style.scss'
import './small-devices.scss'

import Card from '../card'
import React from 'react'

const Cards: React.FC = () => {
   return (
      <section id="cards" className="container py-4">
         <Card
            imgUrl="/assets/cardImg1.png"
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            saepe, non reiciendis aliquid corrupti laboriosam consequuntur 
            Cumque sapiente."
         />
         <Card
            imgUrl="/assets/cardImg2.png"
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            saepe, non reiciendis aliquid corrupti laboriosam consequuntur 
            Cumque sapiente."
         />
         <Card
            imgUrl="/assets/cardImg3.png"
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            saepe, non reiciendis aliquid corrupti laboriosam consequuntur 
            Cumque sapiente."
         />
      </section>
   )
}

export default Cards
