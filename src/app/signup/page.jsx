'use client'

import Link from 'next/link';
import { Poppins, Preahvihear } from 'next/font/google';
import { useState, useEffect, useContext } from 'react';
import Loading from '@/app/loading';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../contexts/UserProvider';

const preahvihear = Preahvihear({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});
const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap',
});

const SignUp = () => {

    const { signup, loading } = useContext(UserContext);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        if (user.email.length > 0 && user.name.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const onSignUp = async (e) => {
        e.preventDefault();
        const name = user.name;
        const email = user.email;
        const password = user.password;

        try {
            await signup(name, email, password);
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    };

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className="mt-20">
                <h1 className={`${poppins.className} text-2xl text-center my-6`}>Sign Up</h1>

                <form onSubmit={onSignUp} className="p-8 shadow-2xl shadow-sky-300 text-white w-full lg:w-2/3 mx-auto flex flex-col gap-8">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className={`${preahvihear.className} input input-bordered focus:outline-none w-full max-w-2xl`}
                        value={user.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className={`${preahvihear.className} input input-bordered focus:outline-none w-full max-w-2xl`}
                        value={user.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        className={`${preahvihear.className} input input-bordered focus:outline-none w-full max-w-2xl`}
                        value={user.password}
                        onChange={handleChange}
                        required
                    />

                    <div>
                        {buttonDisabled ? (
                            <button type="button" className={`${poppins.className} w-full p-2 uppercase opacity-50 cursor-not-allowed bg-gray-300`} disabled>
                                Sign Up
                            </button>
                        ) : (
                            <button type="submit" className={`${poppins.className} w-full p-2 uppercase bg-sky-600 hover:bg-sky-400`}>
                                Sign Up
                            </button>
                        )}
                    </div>

                    <div>
                        <h1 className="text-sm text-center">
                            Have an Account ?
                            <Link href="/login" className={`${poppins.className} hover:text-[#eae8e8]`}>
                                {' '}
                                Log In
                            </Link>
                        </h1>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;
