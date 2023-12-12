"use client"
import { Poppins } from 'next/font/google';
import ProjectsCategory from '@/app/components/ProjectsCategory';
import { useState, useEffect } from 'react';
import ProjectsList from '../components/ProjectsList';

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const Projects = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            const url = '/api/project-route'
            const res = await fetch(url);
            const projectsData = await res.json();
            setProjects(projectsData.projects);
            console.log(projectsData);
        };

        fetchProjects();
    }, []);

    const uniqueCategories = [...new Set(projects.map(project => project.category))];

    const allCategories = ['All', ...uniqueCategories];

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter(project => project.category === selectedCategory);

    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>Projects</h1>
                <div className='flex items-center justify-center gap-12 my-12'>
                    {
                        allCategories.map((data, index) => {
                            return <ProjectsCategory
                                key={index}
                                data={data}
                                setSelectedCategory={setSelectedCategory}
                                setLoading={setLoading}
                            />
                        })
                    }
                </div>

                <ProjectsList
                    filteredProjects={filteredProjects}
                    loading={loading} />
            </div>
        </>
    );
};

export default Projects;