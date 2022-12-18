import React from 'react';
import featuredImage from '../../assets/devmhimran-shopping-cart-02.png'

const FeaturedHero = () => {
    return (
        <div className='mx-auto max-w-screen-xl flex items-center py-28'>
            <div className="grid grid-cols-2">
                <div className="hero__left flex items-center">
                    <div className="hero__left__content">
                        <h1 className='mont font-bold text-6xl'>
                            Welcome to Our <br />
                            Ecommerce Store! <br />
                        </h1>
                        <p className='robo mt-4'>Shop Our Wide Range of Products at Great Prices.</p>
                    </div>
                </div>
                <div className="hero__right ml-auto">
                    <img className='' src={featuredImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedHero;