import './style.scss'

import React from 'react'
import SliderCard from '../sliderCard'

const Slider: React.FC = () => {
   return (
      <section id="slider" className="container py-5">
         <h1 className="title-big mb-6">
            Here&apos;s what they have to say...
         </h1>
         <div className="sliderDiv">
            <SliderCard imgUrl="/assets/testimonials/person1.png" />
         </div>
      </section>
   )
}

export default Slider
