import React, { useEffect, useState } from 'react';
import AllCart from '../AllCart/AllCart';
import ShortHero from '../Hero/ShortHero';

const Cart = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='mx-auto max-w-screen-xl'>
            <ShortHero textColor='text-white' bgColor='bg-orange-500' heading='Cart' />
            <div className="cart__content">
                <div className="grid grid-cols-3 gap-4">
                    <div className="cart__content__left border-2 border-black col-span-2 p-4">
                        <table className='w-full table-auto'>
                            <thead className='border-2 border-black'>
                                <th className='text-left p-1'>Image</th>
                                <th className='text-left p-1'>Name</th>
                                <th className='text-left p-1'>Price</th>
                                <th className='text-left p-1'>Quantity</th>
                                <th className='text-left p-1'></th>
                            </thead>
                            <tbody>
                                {
                                    product.map(data => <AllCart data={data} />)
                                }
                            </tbody>

                        </table>
                    </div>
                    <div className="cart__content__right border-2 border-black h-96">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;