import React from 'react';

const AllProducts = ({ data }) => {
    const { id, title, image, price } = data
    return (
        <div className='card border-2 border-black'>
            <div className="card-body p-4">
                <div className="product__image">
                    <img className='w-full h-64 object-cover' src={image} alt="" />
                </div>
                <div className="product__detail">
                    <h4 className='font-semibold text-lg'>{title.slice(0, 20)}...</h4>
                    <p>Price: ${price}</p>
                </div>
                <div className="cart__btn">
                    <button className='border-2 border-black'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;