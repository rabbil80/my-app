import React, { useContext } from 'react'
import { ShopContext } from '../Contex/ShopContex'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcurm/Breadcrum';
import ProductDisplay from '../Component/ProductDisaplay/ProductDisplay';
import Dicription from '../Component/DiscriptionBox/Dicription';
import RelatedProdduct from '../Component/RelatedProduct/RelatedProdduct';

const Product = () => {

const {all_product} = useContext(ShopContext);
const {productId} = useParams();
const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product={product}/>
      <Dicription/>
      <RelatedProdduct/>
    </div>
  )
}

export default Product