import React from 'react';
import Card from '../component/shared/card';

const Animals = async () => {
    const res = await fetch('https://qurbani-hat-inky.vercel.app/data.json');
    const data = await res.json();
    return (
        <div>
            <h2 className='text-green-700 font-bold text-3xl mt-10 text-center'>All Animals</h2>
            <Card items={data} />
        </div>
    );
};

export default Animals;