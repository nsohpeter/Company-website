import React from 'react'
import './Card.css'
import { CartData } from '../../Utils/Data'

const Card = () => {
  return (
    <div className='card-main-container'>
        <div className="card-container">
          {CartData.map((item, index) => {
            const {id, image, title, desc} = item
            return <div className="card"  key={id}>
              <img src={image} alt= {title} />
               <div className="card-content">
                <h3>{title}</h3>
                <p>{desc}</p>
               </div>
            </div>
          })}
        </div>
    
    </div>
  )
}

export default Card