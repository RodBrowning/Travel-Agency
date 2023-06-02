import './style.scss'

import React from 'react'

type Props = {
   imgUrl: string
   costomerName: string
   testimonial: string
}

const truncateText = (text: string, maxLength: number): string => {
   if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'
   }
   return text
}

const SliderCard: React.FC<Props> = ({ imgUrl, costomerName, testimonial }) => {
   return (
      <div className="sliderCard py-3">
         <img className="mb-3" src={imgUrl} alt="Costomer image" />
         <p className="title-small mb-1">{costomerName}</p>
         <p className="lighter-text">{truncateText(testimonial, 150)}</p>
      </div>
   )
}

export default SliderCard
