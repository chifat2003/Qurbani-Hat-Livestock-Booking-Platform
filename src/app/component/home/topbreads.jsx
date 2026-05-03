import React from 'react';

const Topbreads = async () => {
    const res = await fetch('https://qurbani-hat-inky.vercel.app/top-bread.json');
    const breads = await res.json();
    
    return (
        <div className=' container mx-auto my-10'>
            <div>
                <h2 className='text-center font-semibold text-3xl text-green-700'>Top Breads</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
            {breads.map((bread) => (
                <div className='flex flex-col items-center bg-white rounded-lg shadow-md p-4' key={bread.id}>
                <img key={bread.id} src={bread.image} alt={bread.breed_name} className='w-full object-cover rounded-lg shadow-md mb-4' />
                <div>
                    <h3 className='text-xl font-semibold text-green-700'>{bread.breed_name}</h3>
                    <p className='text-gray-700'>{bread.description}</p>
                    <p><span className='font-bold'>Origin:</span> {bread.origin}</p>
                    <p><span className='font-bold'>Best for:</span> {bread.best_for}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Topbreads;