import Link from 'next/link';
import React from 'react';

const AnimalDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://qurbani-hat-inky.vercel.app/data.json');
    const data = await res.json();

    const animal = data.find(p => p.id == id);

    console.log(animal);


    return (
        <div className='grid container mx-auto my-10 gap-15 md:grid-cols-2 lg:grid-cols-2'>
            <div>
                <img src={animal.image} alt={animal.name} className='w-full' />
            </div>

            <div>
                <h2 className='text-green-700 font-bold text-3xl mt-10'>{animal.name}</h2>
                <p className=' text-xl mt-4'>{animal.breed}</p>
                <div className='flex gap-6'>
                    <p className=' text-xl mt-4'>Age: {animal.age}</p>
                    <p className=' text-xl mt-4'>Weight: {animal.weight}</p>
                </div>
                <p className=' text-xl mt-2'>Price: <span className='font-bold'>{animal.price}</span></p>
                <p className=' text-xl mt-2 font-bold'>Description:</p>
                <p className=' text-xl mt-2'>{animal.description}</p>
                <Link href="/checkout" className="btn bg-green-700 text-white w-full mt-10">Buy Now</Link>
            </div>
        </div>
    );
};

export default AnimalDetailsPage;