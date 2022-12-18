import React, { useEffect } from 'react';
import Hero from '../Hero/Hero';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_START, FETCH_SUCCESS } from '../Redux/actionTypes/actionTypes';
import Loading from '../Loading/Loading';
import { fetchData } from '../Redux/actionCreator/actionCreator';
import AllProducts from '../AllProducts/AllProducts';

const Home = () => {
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
        content = products.map(data => <AllProducts key={data.id} data={data} />)
    }
    return (
        <div>
            <Hero />
            <div className="mx-auto max-w-screen-xl relative">
                <h2 className='font-bold text-5xl mb-16 mont'>All Products</h2>
                <div className="grid grid-cols-4 gap-6">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Home;