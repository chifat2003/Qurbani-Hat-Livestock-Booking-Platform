import React from 'react';

const HeroHome = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(/Hero-Banner.png)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-green-300">Your Sacrifice<br></br> Their Celebration</h1>
                        <p className="mb-5 text-amber-200">
                           Fulfill your religious obligation with a trusted partner.
                        </p>
                        <button className="btn bg-green-700 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroHome;