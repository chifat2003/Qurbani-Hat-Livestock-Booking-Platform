import Image from 'next/image';
import React from 'react';

const Tips = async() => {
    const res = await fetch('https://qurbani-hat-inky.vercel.app/tips.json');
    const tips = await res.json();

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src="/qurbani-tips.png"
                        className="max-w-sm rounded-lg shadow-2xl"
                        width={400}
                        height={400}
                    />
                    <div>
                        <h1 className="text-5xl font-bold text-green-700">কুরবানী কবুল যোগ্য করার উপায়</h1>
                        {tips.map((tip) => (
                            <p key={tip.id} className="py-6 text-lg text-gray-700">{tip.id}<span className="font-bold mx-1"></span> {tip.tip_bangla}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tips;