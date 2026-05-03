import React from 'react';
import Card from '../shared/card';

const CardContainer = () => {
    return (
        <div className=' container mx-auto my-10'>
            <div>
                <h2 className='text-center font-semibold text-3xl text-green-700'>All Animals</h2>
            </div>
            <div >
                <Card></Card>
            </div>
        </div>
    );
};

export default CardContainer;