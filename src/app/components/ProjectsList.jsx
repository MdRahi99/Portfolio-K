import Loader from "./Loader";

const ProjectsList = ({ filteredProjects, loading }) => {
    return (
        <div>
            {
                loading ?
                    <Loader />
                    :
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        {filteredProjects.map(project => (
                            <div key={project._id} className='bg-white text-black p-4 h-44 rounded'>
                                <h2 className='text-lg font-semibold'>{project.title}</h2>
                            </div>
                        ))}
                    </div>
            }
        </div>
    );
};

export default ProjectsList;