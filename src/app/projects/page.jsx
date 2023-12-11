"use client"
import { Poppins } from 'next/font/google';
import ProjectsCategory from '@/app/components/ProjectsCategory';
import { useState } from 'react';
import ProjectsList from '../components/ProjectsList';

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const projects = [
    {
        _id: 1,
        title: 'Case Study 1',
        category: 'Case Study'
    },
    {
        _id: 2,
        title: 'Case Study 2',
        category: 'Case Study'
    },
    {
        _id: 3,
        title: 'Case Study 3',
        category: 'Case Study'
    },
    {
        _id: 4,
        title: 'Web Ui 1',
        category: 'Web'
    },
    {
        _id: 5,
        title: 'Web Ui 2',
        category: 'Web'
    },
    {
        _id: 6,
        title: 'Web Ui 3',
        category: 'Web'
    },
    {
        _id: 7,
        title: 'App Ui 1',
        category: 'App'
    },
    {
        _id: 8,
        title: 'App Ui 2',
        category: 'App'
    },
    {
        _id: 9,
        title: 'App Ui 3',
        category: 'App'
    },
]

const uniqueCategories = [...new Set(projects.map(project => project.category))];

const allCategories = ['All', ...uniqueCategories];

const Projects = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(false);

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