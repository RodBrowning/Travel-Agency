import './style.scss'

import React from 'react'

type Props = {
   imgUrl: string
}

const SliderCard: React.FC<Props> = ({ imgUrl }) => {
   return (
      <div className="sliderCard py-3">
         <img className="mb-3" src={imgUrl} alt="Costomer image" />
         <p className="title-small mb-1">Costomer name</p>
         <p className="lighter-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            iusto non placeat modi beatae sapiente delectus, optio officia iure
            officiis rem?
         </p>
      </div>
   )
}

export default SliderCard
