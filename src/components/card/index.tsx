import './style.scss'
import './small-devices.scss'

import React from 'react'

type Props = {
   imgUrl: string
   title: string
   description: string
}

const Card: React.FC<Props> = ({ imgUrl, title, description }) => {
   return (
      <div id="card">
         <div className="cardImage mb-3">
            <img src={imgUrl} className="mb-4" alt="Card image" />
         </div>
         <p className="title-small mb-2">{title}</p>
         <p>{description}</p>
      </div>
   )
}

export default Card
