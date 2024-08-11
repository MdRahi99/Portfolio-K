"use client"
import ProjectsCategory from '@/app/components/ProjectsCategory';
import { useState } from 'react';
import ProjectsList from '../ProjectsList';

const Projects = ({projects, poppins}) => {

    const [selectedCategory, setSelectedCategory] = useState('All');

    const uniqueCategories = [...new Set(projects.map(project => project.category))];

    const allCategories = ['All', ...uniqueCategories];

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter(project => project.category === selectedCategory);

    return (
        <>
            <div className=''>
                <h1 className={`text-2xl text-left ${poppins.className}`}>Projects</h1>
                <div className="h-[2px] rounded-lg bg-sky-600 mt-2 w-16"></div>
                <div className='flex items-center justify-center gap-12 my-12'>
                    {
                        allCategories?.map((data, index) => {
                            return <ProjectsCategory
                                key={index}
                                data={data}
                                setSelectedCategory={setSelectedCategory}
                            />
                        })
                    }
                </div>

                <ProjectsList filteredProjects={filteredProjects} />
            </div>
        </>
    );
};

export default Projects;