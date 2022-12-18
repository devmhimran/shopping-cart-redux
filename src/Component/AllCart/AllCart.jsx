import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const AllCart = ({ data }) => {
    const { id, title, price, image } = data
    return (

        <tr className='border'>
            <td><img className='h-16 p-2' src={image} alt="" /></td>
            <td><p className='font-semibold'>{title.slice(0, 20)}</p></td>
            <td><p className='font-semibold'>${price}</p></td>
            <td><p className='font-semibold'>5 Pcs</p></td>
            <td><span className='font-semibold text-red-500 cursor-pointer p-5'> <RxCross1 /> </span></td>
        </tr>

    );
};

export default AllCart;