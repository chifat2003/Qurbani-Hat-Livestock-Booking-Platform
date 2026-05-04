"use client";
import React, { useEffect, useState } from 'react';
import Card from '../component/shared/card';

const Animals = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://qurbani-hat-inky.vercel.app/data.json');
                const result = await res.json();
                setData(result);
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
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg text-green-700"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <h2 className='text-green-700 font-bold text-3xl mt-10 text-center'>All Animals</h2>
            <Card items={data} />
        </div>
    );
};

export default Animals;
