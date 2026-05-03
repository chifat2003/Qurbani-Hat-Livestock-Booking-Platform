import React from 'react';
import Card from '../shared/card';

const CardContainer = () => {
    return (
        <div className=' container mx-auto my-10'>
            <div>
                <h2 className='text-center font-semibold text-3xl text-green-700'>All Animals</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                <Card></Card>
            </div>
        </div>
    );
};

export default CardContainer;