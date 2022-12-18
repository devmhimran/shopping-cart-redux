import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const AllCart = ({ data }) => {
    const { id, title, price, image } = data
    return (
        
            <tr>
                <td><img className='w-16 h-16' src={image} alt="" /></td>
                <td><p className='font-semibold'>{title.slice(0, 20)}</p></td>
                <td><p className='font-semibold'>${price}</p></td>
                <td><p className='font-semibold'>5 Pcs</p></td>
                <td><span className='font-semibold'> <RxCross1  className='font-bold' /> </span></td>
            </tr>
      
    );
};

export default AllCart;