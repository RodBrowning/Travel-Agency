import './style.scss'

import React from 'react'

type Props = {
   imgUrl: string
   customerName: string
   testimonial: string
}

const truncateText = (text: string, maxLength: number): string => {
   if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'
   }
   return text
}

const SliderCard: React.FC<Props> = ({ imgUrl, customerName, testimonial }) => {
   return (
      <div className="sliderCard py-3">
         <img className="mb-6" src={imgUrl} alt="Customer image" />
         <p className="regular-text-title mb-2">{customerName}</p>
         <p className="lighter-text">{truncateText(testimonial, 100)}</p>
      </div>
   )
}

export default SliderCard
