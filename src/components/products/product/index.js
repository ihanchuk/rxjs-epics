import React from 'react';
import './style.css';

const getColor = (color) => (({ backgroundColor: color }));

const Product = (props) => {
    const product = props.product;
    return (
        <div className="col-md-4 singleProduct">
            <div className="productName"><span> {product.meta.productName}</span></div>
            <div className="imgContainer">
                <img src={product.meta.img} alt={product.name} />
            </div>
            <div className="productColor">
                <span className="prop">Color:</span>
                <span className="propValue" style={getColor(product.color)}>&nbsp;</span>
            </div>
            <div className="price">
                <span className="prop">Price: </span>
                <span className="val">{product.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} </span>
            </div>
            <div><p>{product.meta.longDescription}</p></div>
        </div>
    )
};

export default Product;