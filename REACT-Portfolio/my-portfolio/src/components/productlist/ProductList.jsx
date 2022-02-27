import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className='productlist'>
      <div className="productlist-text">
        <h1 className="product-title">Create & Inspire. It's Gigamiss</h1>
        <p className="product-description">
        Mi nombre es Gilmary, soy una artista venezolana tengo 28 años y comencé a desarrollarme en los conceptos del arte digital, mis principales materiales son el acrílico, la tinta y la acuarela, para luego pasar al proceso de digitalización.
        </p>
      </div>
      <div className="productlist-list">
        {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link}/>
        ))}
        
        </div> 
    </div>
  );
};

export default ProductList