import React, { useContext } from 'react';
import './CartItem.css'
import { ShopContext } from '../../Contex/ShopContex';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const { all_product, CartItem, removeFromCart } = useContext(ShopContext);
   
    return (
        <div className='cartitem'>
            <div className="cartitem-formet-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p> 
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                console.log("current product", e.new_price)
                if (CartItem && CartItem[e.id] && CartItem[e.id] > 0) {

                    return (
                        <div key={e.id}>
                            <div className="cartitem-format">
                                <img src={`e.image`} alt="" className='carticon-product-icon' />
                                <p>{`e.name`}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitem-quantity'>{CartItem[e.id]}</button>
                                <p>${e.new_price * CartItem[e.id]}</p>
                                <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; // If CartItem[e.id] is not greater than 0 or undefined, return null to indicate no rendering.
            })}
        </div>
    );
};

export default CartItem;