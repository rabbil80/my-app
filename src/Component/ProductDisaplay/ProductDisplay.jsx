import React, { useContext } from 'react';
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Contex/ShopContex';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)

    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(130)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="product-right-description">
                A product description is a form of marketing copy used 
                to describe and explain the benefits of your product. 
               
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'>
                <span>Category :</span>Women, t-shirt, crop top</p>
                <p className='productdisplay-right-category'>
                <span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;