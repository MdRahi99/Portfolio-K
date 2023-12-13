'use client'

import { Poppins } from "next/font/google";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const Admin = () => {

    const router = useRouter();

    const logout = async() => {
        try{
            await axios.get('/api/auth/logout')
            toast.success('Logout Successful')
            router.push('/login')
        }
        catch(error){
            console.log(error.message);
            toast.error(error.message);
        }
    };

    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>Admin Profile</h1>
                <button onClick={logout} className={`${poppins.className} px-3 py-1 bg-sky-700 hover:bg-sky-500 text-white mt-4`}>Logout</button>
            </div>
        </>
    );
};

export default Admin;