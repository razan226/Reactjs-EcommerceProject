import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_icon_dull from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
export const ProductDisplay = (props) => {
    const {Product} = props;
      
    const{addToCart} =useContext(ShopContext);

    return (
        <div className='productDisplay'>
            <div className='productDisplay-left'>
                <div className='productDisplay-img-list'>
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                </div>
                <div className='productDisplay-img'>
                    <img className='ProductDisplay-main-img' src={Product.image} alt="" />

                </div>
            </div>

            <div className='productDisplay-right'>
                <h1>{Product.name}</h1>
                <div className='productDisplay-right-list'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon_dull} alt="" />
                    <p>(122)</p>
                </div>
                <div className='productDisplay-right-prices'>
                    <div className='productDisplay-right-price-old'>
                        ${Product.old_price}
                    </div>
                    <div className='productDisplay-right-price-new'>
                        ${Product.new_price}
                    </div>
                </div>
                <div className='productDisplay-right-description'>
                     {Product.name}
                </div>
                <div className='productDisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productDisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(Product.id)}}>ADD TO CART </button>
                <p className='productDisplay-right-category'><span>Category : </span>Women, T-Shirt, Crop Top</p>
                <p className='productDisplay-right-category'><span>Tags : </span>Modern, Latest</p>

            </div>
        </div>
    )
}
