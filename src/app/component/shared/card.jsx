import React from 'react';
import Image from 'next/image';

const Card = async () => {
    const res = await fetch('https://qurbani-hat-inky.vercel.app/data.json');
    const data = await res.json();
    console.log(data);
    return (
        
        <div>
            {data.map((item) => (
                            <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <Image
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