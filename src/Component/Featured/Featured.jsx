import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_START, FETCH_SUCCESS } from '../Redux/actionTypes/actionTypes';
import Loading from '../Loading/Loading';
import AllProducts from '../AllProducts/AllProducts';
import ShortHero from '../Hero/ShortHero';

const Featured = () => {
    const { loading, products, error } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: FETCH_START })
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => dispatch({
                type: FETCH_SUCCESS,
                payload: data
            }))
    }, [])

    let content;
    if (loading) {
        content = <Loading />
    }
    if (error) {
        content = <h1>Error Occur</h1>
    }
    if (!loading && !error && products.length === 0) {
        content = <><h1 className='text-grey-200'>No product yet</h1></>
    }
    if (!loading && !error && products.length) {
        content = products.filter(data => data.rating.rate >= 4 ).map(data => <AllProducts key={data.id} data={data} />)
    }
    return (
        < div className='mx-auto max-w-screen-xl' >
            <ShortHero textColor='text-white' bgColor='bg-red-500' heading='Featured' />
            <div className="grid grid-cols-4 gap-6">
                {content}
            </div>
        </div >
    )
};

export default Featured;