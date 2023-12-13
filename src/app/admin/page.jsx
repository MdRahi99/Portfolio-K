'use client'

import { Poppins } from "next/font/google";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const Admin = () => {
    const {data, logout} = useContext(UserContext);

    console.log(data);

    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>Admin Profile</h1>
                <div className='flex items-center gap-4'>
                    <h1 className={`${poppins.className} text-lg`}>{data === '' ? 'No Data' : <Link href={`/admin/${data?._id}`}>{data.name}</Link>}</h1>
                    <button onClick={logout} className={`${poppins.className} px-3 py-1 bg-sky-700 hover:bg-sky-500 text-white mt-4`}>Logout</button>
                </div>
            </div>
        </>
    );
};

export default Admin;