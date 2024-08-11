'use client'

import { Poppins, Preahvihear } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

const preahvihear = Preahvihear({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
});
const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
});

const ResumeForm = () => {
    const router = useRouter();
    const [resume, setResume] = useState({
        url: ""
    });
    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setResume((prevResume) => ({ ...prevResume, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { url } = resume;
        const formData = { url };

        try {
            const response = await fetch('/api/resume', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                setResume({
                    url: "",
                });
                setStatus('success');
                router.push('/admin');
            } else {
                setStatus('error');
            }

        } catch (e) {
            console.log(e);
            setStatus('error');
        }
    };

    return (
        <div className="mt-20">
            <form onSubmit={handleSubmit} className="p-8 bg-gradient-to-r from-sky-800 to-slate-900 rounded-lg w-full lg:w-2/3 mx-auto flex flex-col gap-8 items-center">
            <h1 className={`${poppins.className} text-2xl text-center my-2`}>Add Resume</h1>
                <input
                    type="text"
                    name="url"
                    placeholder="Enter Your Resume URL"
                    className={`${preahvihear.className} input input-bordered bg-white text-black bg-opacity-90 focus:outline-none w-full max-w-md`}
                    value={resume.url}
                    onChange={handleChange}
                    required
                />

                <div>
                    {status === 'success' && <p className='text-white bg-sky-700 p-4 text-center w-2/3 mx-auto my-12'>Resume Added!</p>}
                    {status === 'error' && <p className='text-white bg-orange-700 p-4 text-center w-2/3 mx-auto my-12'>There was an error submitting your form. Please try again.</p>}

                    <button type="submit" className={`${poppins.className} w-full lg:w-32 rounded-md px-4 py-2 uppercase bg-sky-700 hover:bg-sky-600`}>Add</button>
                </div>
            </form>
        </div>
    );
};

export default ResumeForm;
