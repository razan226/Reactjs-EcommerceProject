import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import './BreadCrum.css'

export const Breadcrum = (props) => {
    const {Product} =props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt=''/>
        Shop <img src={arrow_icon} alt=''/>
        {Product.category} <img src={arrow_icon} alt=''/>
        {Product.name}

    </div>
  )
}
