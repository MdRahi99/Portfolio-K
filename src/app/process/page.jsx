import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const processData = [
    {
        icon: '/process-logo-1.png',
        title: 'User Research',
        description: "The process of understanding users'needs, behaviors and attitudes to inform the design and development of products or services."
    },
    {
        icon: '/process-logo-2.png',
        title: 'Wireframing',
        description: "This is the process, where overviews of interactive products are drawn to establish the structure and flow of possible design solutions."
    },
    {
        icon: '/process-logo-3.png',
        title: 'Prototyping',
        description: "Demonstrating a product's design and functionality to clients and potential users."
    },
    {
        icon: '/process-logo-4.png',
        title: 'Usability Testing',
        description: "Where the visual structure of the application will be created."
    },
    {
        icon: '/process-logo-4.png',
        title: 'User Interface Design',
        description: "Where the visual structure of the application will be created."
    },
    {
        icon: '/process-logo-6.png',
        title: 'Delivery to client',
        description: "This is the stage when the UI is at a point where the developer can finally start implementing it in code."
    },
];

const Process = () => {
    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>Work Process</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-between gap-10 mt-16'>
                    {
                        processData.map((data, index) => {
                            const { icon, title, description } = data;
                            return <div key={index} className='gap-2 flex flex-row lg:flex-col'>
                                <div className='w-1/6 lg:w-full lg:flex justify-center'>
                                    <Image
                                        src={icon}
                                        alt="Icon"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div className='w-5/6 lg:w-full'>
                                    <h1 className={`${poppins.className} lg:text-center text-lg mb-4`}>{title}</h1>
                                    <p className='shadow-sm h-44 w-full p-4 shadow-sky-300 font-extralight'>{description}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Process;