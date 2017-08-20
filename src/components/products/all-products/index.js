import React from 'react';

const AllProducts = ({ products }) => {
    return (
        <div>
            {
                products.map((product, index) => {
                    return (
                        <div key={index}>
                            <h2> {product.name}</h2>
                            <h3> Price:: {product.price}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default AllProducts;