'use client'

import { Poppins, Preahvihear } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
const preahvihear = Preahvihear({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
})
const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const ProfileForm = () => {
    const router = useRouter();
    const [profile, setProfile] = useState({
        name: "",
        designation: "",
        image: "",
        description: ""
    })
    const [status, setStatus] = useState(null);


    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = profile.name;
        const designation = profile.designation;
        const image = profile.image;
        const description = profile.description
        const formData = {
            name, designation, image, description
        };

        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            if (response.status === 200) {
                setProfile({
                    name: "",
                    designation: "",
                    image: "",
                    description: ""
                })
                setStatus('success');
                router.push('/admin')
            } else {
                setStatus('error');
            }

        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className='mt-20'>
            <h1 className={`${poppins.className} text-2xl text-center my-6`}>Add Profile</h1>
            <form onSubmit={handleSubmit} className='p-8 shadow-2xl shadow-sky-300 text-white w-full lg:w-2/3 mx-auto flex flex-col gap-8'>
                <input type="text" name="name"
                    placeholder="Enter Your Name"
                    className={`${preahvihear.className} input input-bordered focus:outline-none w-full max-w-2xl`}
                    value={profile.name}
                    onChange={handleChange}
                    required
                />

                <input type="text" name="designation"
                    placeholder="Enter Your Designation"
                    className={`${preahvihear.className} input input-bordered focus:outline-none w-full max-w-2xl`}
                    value={profile.designation}
                    onChange={handleChange}
                    required
                />

                <input type="text" name="image"
                    placeholder="Enter Your Image Url"
                    className={`${preahvihear.className} input input-bordered focus:outline-none w-full max-w-2xl`}
                    value={profile.image}
                    onChange={handleChange}
                    required
                />

                <textarea type="text" name="description"
                    placeholder="Enter Your Description"
                    className={`${preahvihear.className} input input-bordered focus:outline-none w-full max-w-2xl`}
                    value={profile.description}
                    onChange={handleChange}
                    required
                />

                <div>
                    {status === 'success' && <p className='text-white bg-sky-700 p-4 text-center w-2/3 mx-auto my-12'>Profile Added!</p>}
                    {status === 'error' && <p className='text-white bg-orange-700 p-4 text-center w-2/3 mx-auto my-12'>There was an error submitting your form. Please try again.</p>}

                    <button type="submit" className={`${poppins.className} w-full p-2 uppercase bg-sky-600 hover:bg-sky-400`}>Add</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileForm;