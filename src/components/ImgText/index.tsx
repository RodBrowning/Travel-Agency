import './style.scss'
import './small-devices.scss'

import React from 'react'

const ImgText: React.FC = () => {
   return (
      <section id="imgText">
         <div className="container py-5">
            <div className="text">
               <h2 className="title-medium mb-7">
                  Choose anywhere you&apos;d like to be
               </h2>
               <p className="title-small mb-3">Lorem, ipsum dolor.</p>
               <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  voluptatibus delectus iste tempora minus eius ut reprehenderit
                  molestias natus ad culpa libero, obcaecati repellendus nemo
                  rerum quam ducimus, excepturi enim.
               </p>
               <p className="title-small mb-3">Lorem, ipsum dolor.</p>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  voluptatibus delectus iste tempora minus eius ut reprehenderit
                  molestias natus ad culpa libero, obcaecati repellendus nemo
                  rerum quam ducimus, excepturi enim.
               </p>
            </div>
            <div
               className="image"
               style={{ backgroundImage: 'url(/assets/Image.png)' }}
            ></div>
         </div>
      </section>
   )
}

export default ImgText
