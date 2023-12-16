'use client';

import AdminProjectsList from '@/app/components/AdminProjectsList';
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const AllProjects = () => {

    const [projectData, setProjectData] = useState([]);
    useEffect(() => {
        const fetchProjectsData = async () => {
            const url = '/api/project-route'
            const res = await axios.get(url);
            setProjectData(res.data.projects);
        };

        fetchProjectsData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                await axios.delete(`/api/project-route/${id}`);

                setProjectData((prevProjects) => prevProjects.filter((project) => project._id !== id));

                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your project has been deleted.',
                    icon: 'success'
                });
            }
        } catch (error) {
            console.error('Error deleting project:', error);

            if(error){
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred while deleting the project.',
                    icon: 'error'
                });
            }
        }
    };

    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>All Projects</h1>

                <AdminProjectsList
                    projectData={projectData}
                    handleDelete={handleDelete} />
            </div>
        </>
    );
};

export default AllProjects;