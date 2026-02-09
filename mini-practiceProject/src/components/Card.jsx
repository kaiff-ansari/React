import React from 'react'
import { MapPinned } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

const Card = (props) => {
  return (
    <div className='card'>

        <div className="profile">
            <img src={props.img} alt="" />
        </div>
        <div className='center'>
            <h2>{props.name}</h2>
            <h5>{props.designation}</h5>
        </div>

        <div className="bottom">
  <h5 className="info">
    <MapPinned size={14} strokeWidth={1.5} />
    <span>{props.location}</span>
  </h5>

  <h5 className="info">
    <Mail size={14} strokeWidth={1.5} />
    <span>Email : mohdkaif@gmail.com</span>
  </h5>

  <h5 className="info">
    <Phone size={14} strokeWidth={1.5} />
    <span>Phone : 9876543210</span>
  </h5>
</div>


    </div>
  )
}

export default Card