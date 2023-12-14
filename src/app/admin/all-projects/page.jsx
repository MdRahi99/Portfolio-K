'use client';

import AdminProjectsList from '@/app/components/AdminProjectsList';
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';
import axios from 'axios';

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const AllProjects = () => {

    const [projectData, setProjectData] = useState([]);
    useEffect(() => {
        const fetchProjectsData = async () => {
            const url = '/api/all-projects'
            const res = await fetch(url);
            const data = await res.json();
            setProjectData(data.projects);
        };

        fetchProjectsData();
    }, []);

    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>All Projects</h1>

                <AdminProjectsList projectData={projectData} />
            </div>
        </>
    );
};

export default AllProjects;