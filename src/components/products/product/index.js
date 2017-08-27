import React from 'react';

const Product = (props) => {
    const product =props.product;
    return (
        <div>
            <h2> {product.name}</h2>
            <h3> Price:: {product.price}</h3>
        </div>
    )
};

export default Product;