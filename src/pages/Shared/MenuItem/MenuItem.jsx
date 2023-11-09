import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className='flex space-x-4 space-y-3 mb-6'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px]' src={image} alt="" />
            <div className='flex'>
                <h3 className='uppercase text-xl font-bold text-gray-700'>{name}---------</h3>
                <p>{recipe}</p>
                
            </div>
            <p className='text-yellow-400'>${price}</p>
        </div>
    );
};

export default MenuItem;