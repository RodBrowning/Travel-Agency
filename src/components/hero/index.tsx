import './style.scss'
import './small-devices.scss'

import React from 'react'

const Hero: React.FC = () => {
   return (
      <section id="hero" className="container py-2">
         <div className="text">
            <h1 className="title-big mb-2">Travel to your dream destination</h1>
            <p className="mb-4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
               vero, numquam velit maiores consectetur sapiente maxime ad
               aspernatur odio.
            </p>
            <button className="btn-secondary">Reserve Ticket</button>
         </div>
         <div className="heroImage">
            <img
               src="/assets/heroImage.png"
               alt="Hero image"
               className="image-filter"
            />
         </div>
      </section>
   )
}

export default Hero
