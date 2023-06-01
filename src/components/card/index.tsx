import './style.scss'

import React from 'react'

type Props = {
   imgUrl: string
}

const Card: React.FC<Props> = ({ imgUrl }) => {
   return (
      <div id="card">
         <div className="cardImage mb-4">
            <img src={imgUrl} className="mb-4" alt="Card image" />
         </div>
         <p className="title-small mb-2">Lorem ipsum dolor sit amet</p>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            saepe, non reiciendis aliquid corrupti laboriosam consequuntur?
            Cumque sapiente voluptatum optio.
         </p>
      </div>
   )
}

export default Card
