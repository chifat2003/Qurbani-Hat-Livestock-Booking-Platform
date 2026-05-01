import React from 'react';

const Sats = () => {
    return (
        <div className='flex justify-center container mx-auto mb-10'>
            <div className="stats stats-vertical lg:stats-horizontal w-full">
                <div className="stat place-items-center">
                    <div className="stat-title text-green-700">Downloads</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-green-700">Users</div>
                    <div className="stat-value text-green-700">4,200</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-green-700">New Registers</div>
                    <div className="stat-value">1,200</div>
                </div>
            </div>
        </div>
    );
};

export default Sats;