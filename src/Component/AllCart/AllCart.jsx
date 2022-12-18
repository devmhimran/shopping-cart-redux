import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { REMOVE_CART } from '../Redux/actionTypes/actionTypes';

const AllCart = ({ data }) => {
    const { id, title, price, image, quantity } = data
    const dispatch = useDispatch();
    return (
        <tr className='border'>
            <td><img className='h-16 p-3' src={image} alt="" /></td>
            <td><p className='font-semibold text-sm lg:text-base p-3'>{title.slice(0, 20)}</p></td>
            <td><p className='font-semibold text-sm lg:text-base p-3'>${price}</p></td>
            <td><p className='font-semibold text-sm lg:text-base p-3'>{quantity} Pcs</p></td>
            <td><span className='font-semibold text-red-500 cursor-pointer p-3 lg:p-5' onClick={()=>dispatch({type: REMOVE_CART, payload: data})}> <RxCross1 /> </span></td>
        </tr>

    );
};

export default AllCart;