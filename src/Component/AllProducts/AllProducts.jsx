import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../Redux/actionTypes/actionTypes';

const AllProducts = ({ data }) => {
    const { id, title, image, price } = data
    const dispatch = useDispatch();
    return (
        <div className='card border-2 border-black'>
            <div className="card-body p-4">
                <div className="product__image">
                    <img className='w-full h-52 lg:h-64 object-cover' src={image} alt="" />
                </div>
                <div className="product__detail">
                    <h4 className='font-semibold text-base lg:text-lg mont my-1'>{title.slice(0, 20)}...</h4>
                    <p className='text-black my-1'>Price: ${price}</p>
                </div>
                <div className="cart__btn flex gap-1">
                    <button className='border-2 border-black py-1 w-full hover:bg-red-500 hover:text-white mont font-semibold text-sm lg:text-base' onClick={()=> dispatch({type: ADD_TO_CART, payload: data})}>Add to cart</button>
                    <button className='border-2 border-black py-1 px-2 hover:border-red-500 wishlist'> <span className='text-2xl'><BiHeart /></span> </button>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;