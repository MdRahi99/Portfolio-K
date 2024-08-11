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

const ProjectForm = () => {
    const router = useRouter();
    const [project, setProject] = useState({
        title: "",
        category: "",
        image: "",
        project_url: ""
    });
    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setProject((prevProject) => ({ ...prevProject, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, category, image, project_url } = project;
        const formData = { title, category, image, project_url };

        try {
            const response = await fetch('/api/project-route', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                setProject({
                    title: "",
                    category: "",
                    image: "",
                    project_url: ""
                });
                setStatus('success');
                router.push('/admin/all-projects');
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
            <h1 className={`${poppins.className} text-2xl text-center my-2`}>Add Project</h1>
                <input type="text" name="title"
                    placeholder="Enter Your Title"
                    className={`${preahvihear.className} input input-bordered bg-white text-black bg-opacity-90 focus:outline-none w-full max-w-md`}
                    value={project.title}
                    onChange={handleChange}
                    required
                />

                <select
                    className={`${preahvihear.className} select select-bordered bg-white text-black bg-opacity-90 focus:outline-none w-full max-w-md`}
                    name='category'
                    value={project.category}
                    onChange={handleChange}
                    required >
                    <option disabled hidden value="">
                        Select Category
                    </option>
                    <option>Case Study</option>
                    <option>Web</option>
                    <option>App</option>
                </select>

                <input type="text" name="image"
                    placeholder="Enter Your Image Url"
                    className={`${preahvihear.className} input input-bordered bg-white text-black bg-opacity-90 focus:outline-none w-full max-w-md`}
                    value={project.image}
                    onChange={handleChange}
                    required
                />

                <input type="text" name="project_url"
                    placeholder="Enter Your Project Url"
                    className={`${preahvihear.className} input input-bordered bg-white text-black bg-opacity-90 focus:outline-none w-full max-w-md`}
                    value={project.project_url}
                    onChange={handleChange}
                    required
                />

                <div>
                    {status === 'success' && <p className='text-white bg-sky-700 p-4 text-center w-2/3 mx-auto my-12'>Project Added!</p>}
                    {status === 'error' && <p className='text-white bg-orange-700 p-4 text-center w-2/3 mx-auto my-12'>There was an error submitting your form. Please try again.</p>}

                    <button type="submit" className={`${poppins.className} w-full lg:w-32 rounded-md px-4 py-2 uppercase bg-sky-700 hover:bg-sky-600`}>Add</button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;
