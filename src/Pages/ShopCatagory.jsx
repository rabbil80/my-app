import React from 'react'
import './css/ShopCategory.css'
import { useContext } from 'react'
import   { ShopContext } from '../Contex/ShopContex'
import dropdown_icon from '../Component/Assets/dropdown_icon.png'
import Item from '../Component/Item/Item'



const ShopCatagory = (props) => {

const {all_product} = useContext(ShopContext);
console.log(ShopContext)

  return (
    <div className='ShopCatagory'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
       <div className="shop-category-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
       </div>
       <div className="shopcategoy-product">
        {all_product.map((item, i) => {
            if (props.category === item.category) {
              return<Item key ={i} 
              id = {item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}/>
            }
            else{
              return null;
            }
        })}
       </div>
       <div className="shopcategory-loadmore">
        Explore More
       </div>
    </div>
  )
}

export default ShopCatagory