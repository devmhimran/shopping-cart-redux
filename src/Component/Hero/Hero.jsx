import React from 'react';
import heroImage from '../../assets/devmhimran-shopping-cart-01.png'

const Hero = () => {
    return (
        <div className='mx-auto max-w-screen-xl h-[90vh] flex items-center'>
            <div className="grid grid-cols-2">
                <div className="hero__left flex items-center">
                    <div className="hero__left__content">
                        <h1 className='mont font-bold text-6xl leading-tight'>
                            Welcome to Our 
                            Ecommerce<br />
                            Redux  Store! <br />
                        </h1>
                        <p className='robo mt-4'>Shop Our Wide Range of Products at Great Prices.</p>
                    </div>
                </div>
                <div className="hero__right">
                    <img className='w-5/6 ml-auto ' src={heroImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;