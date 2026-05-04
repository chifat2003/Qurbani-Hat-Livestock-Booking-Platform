"use client";
import React, { useEffect, useState } from 'react';
import Card from '../shared/card';
import Link from 'next/link';

const CardContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://qurbani-hat-inky.vercel.app/data.json');
                const data = await res.json();
                setItems(data.slice(0, 4));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto my-10 flex justify-center items-center min-h-[400px]">
                <span className="loading loading-spinner loading-lg text-green-700"></span>
            </div>
        );
    }

    return (
        <div className='container mx-auto my-10'>
            <div>
                <h2 className='text-center font-semibold text-3xl text-green-700'>All Animals</h2>
            </div>
            <div>
                <Card items={items} />
            </div>
            <div className='flex justify-center mt-10'>
                <Link href="/animals" className="btn bg-green-700 text-white">View All</Link>
            </div>
        </div>
    );
};

export default CardContainer;
