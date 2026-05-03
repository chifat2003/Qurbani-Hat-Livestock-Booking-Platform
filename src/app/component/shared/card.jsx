import Image from 'next/image';
import React from 'react';

const Card = async () => {
    const res = await fetch('https://qurbani-hat-inky.vercel.app/data.json');
    const data = await res.json();
    console.log(data);
    return (
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {data.map((item) => (
                            <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={item.image}
                        alt="Shoes"
                        className="rounded-xl"
                        width={300}
                        height={200} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions">
                        <button className="btn bg-green-700 text-white">Details</button>
                    </div>
                </div>
            </div>
            ))  
            }
        </div>
    );
};

export default Card;