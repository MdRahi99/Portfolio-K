import Image from "next/image";
import Link from "next/link";
import Loading from "../loading";

const ProjectsList = ({ filteredProjects, loading }) => {
    return (
        <div>
            {
                loading ?
                    <Loading />
                    :
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 p-10 lg:p-0'>
                        {filteredProjects.map(project => {
                            const { _id, title, image, project_url } = project;
                            return <div key={_id} className="shadow-2xl shadow-sky-300 rounded-br-3xl rounded-tl-3xl">
                                <div className='h-52 w-full hover:opacity-30'>
                                    <Link href={project_url} target="_blank">
                                        <Image
                                            className='rounded-tl-3xl h-full w-full'
                                            src={image}
                                            alt={title}
                                            width='260'
                                            height='240' />
                                    </Link>
                                </div>
                                <div className="p-3 w-full text-center">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                        })}
                    </div>
            }
        </div>
    );
};

export default ProjectsList;