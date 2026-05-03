import Image from 'next/image';
import React from 'react';

const Card = ({ items }) => {


    return (

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
            {items.map((item) => (
                <div key={item.id} className="card bg-base-100  shadow-sm">
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
                        <p>{item.breed}</p>
                        <p>{item.price}</p>
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