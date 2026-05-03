import React from 'react';

const BuyTips = async () => {
    const res = await fetch('https://qurbani-hat-inky.vercel.app/buy-tips.json');
    const buytips = await res.json();


    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-3xl my-6 text-green-700 font-bold'>Buy Tips</h2>
            <ul className="list bg-base-100 rounded-box ">


                {/* <li className="list-row items-center">
                    <div className="text-4xl font-thin opacity-30 tabular-nums text-green-700">01</div>
                    <div className="text-lg">Dio Lupa</div>
                </li> */}

                {buytips.map((tip) => (
                    <li key={tip.id} className="list-row items-center">
                        <div className="text-4xl font-thin opacity-30 tabular-nums text-green-700">{tip.id}</div>
                        <div className="text-lg">{tip.step_bangla}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BuyTips;