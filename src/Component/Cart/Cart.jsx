import React, { useEffect, useState } from 'react';
import AllCart from '../AllCart/AllCart';
import ShortHero from '../Hero/ShortHero';
import { useSelector } from 'react-redux';

const Cart = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const cart = useSelector(state => state.cart)
    let content;
    if(cart.length === 0){
        content = <><tr><td><h2 className='font-semibold text-base lg:text-2xl mt-3'>No Product Added Yet</h2></td></tr></>
    }else{
        content = cart.sort((a,b) => a.id - b.id).map(data => <AllCart key={data.id} data={data} />)
    }
    return (
        <div className='mx-3 lg:mx-auto max-w-screen-xl h-screen'>
            <ShortHero textColor='text-white' bgColor='bg-orange-500' heading='Cart' />
            <div className="cart__content">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="cart__content__left border-2 border-black col-span-2 p-4">
                        <table className='w-full table-auto'>
                            <thead className='border-2 border-black'>
                                <tr>
                                    <th className='text-left p-1'>Image</th>
                                    <th className='text-left p-1'>Name</th>
                                    <th className='text-left p-1'>Price</th>
                                    <th className='text-left p-1'>Quantity</th>
                                    <th className='text-left p-1'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    content
                                }
                            </tbody>

                        </table>
                    </div>
                    <div className="cart__content__right border-2 border-black col-span-2 lg:col-auto h-44 lg:h-96 p-5">
                        <h2 className='text-lg font-semibold'>Subtotal-</h2>
                        <h2 className='text-lg font-semibold'>Tax-</h2>
                        <h2 className='text-lg font-semibold'>Total-</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;