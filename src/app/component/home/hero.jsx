import Link from 'next/link';
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
                        <h1 className="mb-5 text-5xl font-bold text-green-300 animate__animated animate__fadeInDown">
                            Your Sacrifice<br></br> Their Celebration
                        </h1>
                        <p className="mb-5 text-amber-200 animate__animated animate__fadeInUp animate__delay-1s">
                           Fulfill your religious obligation with a trusted partner.
                        </p>
                        <Link href="/animals" className="btn bg-green-700 text-white ml-4 animate__animated animate__fadeInUp animate__delay-2s">
                            View Animals
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroHome;