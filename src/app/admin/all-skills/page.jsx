'use client';

import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import AdminSkillsList from '@/app/components/AdminSkillsList';

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const AllSkills = () => {

    const [skillData, setSkillData] = useState([]);
    useEffect(() => {
        const fetchSkillsData = async () => {
            const url = '/api/expertise-route'
            const res = await axios.get(url);
            setSkillData(res.data.skills);
        };

        fetchSkillsData();
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
                await axios.delete(`/api/expertise-route/${id}`);

                setSkillData((prev) => prev.filter((skill) => skill._id !== id));

                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your skill has been deleted.',
                    icon: 'success'
                });
            }
        } catch (error) {
            console.error('Error deleting skill:', error);

            if(error){
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred while deleting the skill.',
                    icon: 'error'
                });
            }
        }
    };

    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>All Projects</h1>

                <AdminSkillsList
                    skillData={skillData}
                    handleDelete={handleDelete} />
            </div>
        </>
    );
};

export default AllSkills;