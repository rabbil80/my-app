import React from 'react';
import './RelatedProduct.css'
import data_product from '../Assets/data';
import Item from '../Item/Item';



const RelatedProdduct = () => {
    return (
        <div className='relatedProduct'>
            <h1>Related Product</h1>
            <hr/>
            <div className="relatedProduct-item">
                {data_product.map((item,i) => {
                    return <Item id = {item.id} 
                    name={item.name} 
                    image={item.image} 
                    new_price={item.new_price} 
                    old_price={item.old_price}/>

                })}
            </div>
        </div>
    );
};

export default RelatedProdduct;