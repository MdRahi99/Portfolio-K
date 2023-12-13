import Image from 'next/image';
import React from 'react';
import img from '../../public/not-found.jpg';
import Link from 'next/link';

const NotFound = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center mt-28'>
                <Image
                src={img}
                alt='Not Found'
                height='50'
                width='350' />

                <Link className='text-lg rounded-lg px-3 py-1 hover:bg-sky-400 bg-sky-600 text-white text-center flex justify-center w-64 mt-10 mx-auto' href='/'>Back To Home</Link>
            </div>
        </>
    );
};

export default NotFound