'use client'

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

// const expertiseData = [
//     {
//         icon: '/expertise-logo-1.png'
//     },
//     {
//         icon: '/expertise-logo-2.png'
//     },
//     {
//         icon: '/expertise-logo-3.png'
//     },
//     {
//         icon: '/expertise-logo-4.png'
//     },
// ]

const Expertise = () => {

    const [expertiseData, setExpertiseData] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const url = '/api/expertise-route'
            const res = await fetch(url);
            const skillsData = await res.json();
            setExpertiseData(skillsData.skills);
        };

        fetchSkills();
    }, []);

    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>Expertise</h1>
                <div className='grid grid-cols-3 lg:grid-cols-4 items-center gap-10 mt-16'>
                    {
                        expertiseData.map((data) => {
                            return <div key={data._id}>
                                <div className='flex justify-center mx-auto shadow-lg shadow-sky-400 p-2 bg-[#edfcfc] hover:bg-transparent h-16 w-20 rounded-lg'>
                                    <Image
                                        className='rounded-lg'
                                        src={data.image}
                                        alt="Icon"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Expertise;