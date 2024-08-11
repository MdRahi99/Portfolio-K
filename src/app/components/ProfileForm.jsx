'use client'

import { Poppins, Preahvihear } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
    });
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
        const description = profile.description;

        const formData = {
            name, designation, image, description
        };

        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                setProfile({
                    name: "",
                    designation: "",
                    image: "",
                    description: ""
                });
                setStatus('success');
                router.push('/admin');
            } else {
                setStatus('error');
                toast.error('There was an error submitting your form. Please try again.');
            }

        } catch (e) {
            console.log(e);
            toast.error('There was an error submitting your form. Please try again.');
        }
    }

    return (
        <>
            <Toaster />
            <div className="mt-20">
                <form onSubmit={handleSubmit} className="p-8 bg-gradient-to-r from-sky-800 to-slate-900 rounded-lg w-full lg:w-2/3 mx-auto flex flex-col items-center gap-8">
                    <h1 className={`${poppins.className} text-2xl my-2`}>Add Profile</h1>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className={`${preahvihear.className} input bg-white text-black bg-opacity-90 input-bordered focus:outline-none w-full max-w-md`}
                        value={profile.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="designation"
                        placeholder="Enter Your Designation"
                        className={`${preahvihear.className} input bg-white text-black bg-opacity-90 input-bordered focus:outline-none w-full max-w-md`}
                        value={profile.designation}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="image"
                        placeholder="Enter Your Image Url"
                        className={`${preahvihear.className} input bg-white text-black bg-opacity-90 input-bordered focus:outline-none w-full max-w-md`}
                        value={profile.image}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        type="text"
                        name="description"
                        placeholder="Enter Your Description"
                        className={`${preahvihear.className} input bg-white text-black bg-opacity-90 input-bordered focus:outline-none w-full max-w-md`}
                        value={profile.description}
                        onChange={handleChange}
                        required
                    />

                    <div>
                        <button
                            type="submit"
                            className={`${poppins.className} w-full lg:w-32 rounded-md px-4 py-2 uppercase bg-sky-700 hover:bg-sky-600`}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProfileForm;
