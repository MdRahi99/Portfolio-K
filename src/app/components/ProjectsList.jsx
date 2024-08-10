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
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        {filteredProjects.map(project => {
                            const { _id, title, image, project_url } = project;
                            return <div key={_id} className="rounded-lg bg-slate-800 rounded-tl-3xl">
                                <div className='h-64 lg:h-52 w-full hover:opacity-30'>
                                    <Link href={project_url} target="_blank">
                                        <Image
                                            className='rounded-t-lg h-full w-full'
                                            src={image}
                                            alt={title}
                                            width='900'
                                            height='900' />
                                    </Link>
                                </div>
                                <div className="p-3">
                                    <h2>{title.slice(0,20)}...</h2>
                                </div>
                            </div>
                        })}
                    </div>
            }
        </div>
    );
};

export default ProjectsList;