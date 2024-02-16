import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'


export const CartItems = () => {
    const {getTotalCartAmount, all_Product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartItems'>
            <div className="cartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_Product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='cartItems-format-main cartitems-format'>
                            <img src={e.image} alt="" className='cartIcon-product-icon' />
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" className='cartIcon-remove-icon' />

                        </div>
                        <hr />
                    </div>

                }
                return null;
            })}
            <div className='cartitem-down'>
                <div className='cartitem-total'>
                    <h1>Totals</h1>
                    <div>
                        <div className='cartitem-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitem-total-item'>
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                    </div>
                    <div className='cartitem-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                
            
            <div className='cartitems-promocode'>
                <p>If You Have A Promo Code, Enter It Here</p>
                <div className='cartitem-propobox'>
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
        </div>
    )
}
