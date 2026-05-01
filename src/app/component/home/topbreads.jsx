import React from 'react';

const Topbreads = () => {
    return (
        <div className='container mx-auto my-10 '>
            <h2 className="text-3xl font-bold mb-4 text-center text-green-700">Top Breads</h2>
            <div className='flex justify-center'>

                <div className='grid gap-6 lg:grid-cols-3 sm:grid-cols-1'>

                    <div className="card bg-base-100 w-96 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Topbreads;