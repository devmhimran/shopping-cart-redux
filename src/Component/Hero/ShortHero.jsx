import React from 'react';

const ShortHero = ({heading, bgColor, textColor}) => {
    return (
        <div className={`cart__heading border-2 border-black py-8 my-8 ${textColor} ${bgColor}`}>
            <h1 className='text-center uppercase font-bold text-4xl'>{heading}</h1>
        </div>
    );
};

export default ShortHero;