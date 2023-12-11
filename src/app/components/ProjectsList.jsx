import Image from "next/image";
import Loader from "./Loader";
import Link from "next/link";

const ProjectsList = ({ filteredProjects, loading }) => {
    return (
        <div>
            {
                loading ?
                    <Loader />
                    :
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 p-10 lg:p-0'>
                        {filteredProjects.map(project => {
                            const { _id, title, img } = project;
                            return <div key={_id} className="shadow-2xl shadow-sky-300 rounded-br-3xl rounded-tl-3xl">
                                <div className='h-52 w-full hover:opacity-30'>
                                    <Link href='https://www.behance.net/gallery/183954903/Restaurant-FOOD-APP-UI'>
                                        <Image
                                            className='rounded-tl-3xl h-full w-full'
                                            src={img}
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