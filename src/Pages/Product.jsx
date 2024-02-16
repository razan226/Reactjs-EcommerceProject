import React, { useContext } from 'react'
import  { useParams } from 'react-router-dom'
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import { ProductDisplay } from '../Components/ProducrDisplay/ProductDisplay';
import { Description } from '../Components/Description/Description';
import { RelatedProduct } from '../Components/RelatedProducts/RelatedProduct';

export const Product = () => {
  const {all_Product} = useContext(ShopContext)
  const {ProductID} = useParams();
  const Product = all_Product.find((e)=> e.id === Number(ProductID));


  return (
    <div>
      <Breadcrum Product={Product}/>
      <ProductDisplay Product={Product}/>
      <Description/>
      <RelatedProduct/>
    </div>
  )
}
