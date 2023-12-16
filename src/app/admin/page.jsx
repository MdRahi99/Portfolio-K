'use client'

import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const Admin = () => {

    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>Admin Profile</h1>
                <Image
                className="mt-6 w-full h-80 lg:h-64 lg:w-64"
                src='/logo.jpg'
                alt='logo'
                width={200}
                height={100} />
            </div>
        </>
    );
};

export default Admin;