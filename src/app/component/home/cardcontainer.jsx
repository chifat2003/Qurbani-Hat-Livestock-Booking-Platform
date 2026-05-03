import React from 'react';
import Card from '../shared/card';
import Link from 'next/link';


const CardContainer = async () => {
        const res = await fetch('https://qurbani-hat-inky.vercel.app/data.json');
    const data = await res.json();
    const items = data.slice(0, 4);
    return (
        <div className=' container mx-auto my-10'>
            <div>
                <h2 className='text-center font-semibold text-3xl text-green-700'>All Animals</h2>
            </div>
            <div >
                <Card items={items} />
            </div>
            <div className='flex justify-center mt-10'>
            <Link href="/animals" className="btn bg-green-700 text-white ">View All</Link>
            </div>
        </div>
    );
};

export default CardContainer;