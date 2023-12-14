'use client'

import { Poppins } from "next/font/google";

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
            </div>
        </>
    );
};

export default Admin;