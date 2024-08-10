'use client'
import { Preahvihear, Poppins } from 'next/font/google';
import Image from 'next/image';
import logo from '../../../public/banner_logo.png';
import Link from 'next/link';

const preahvihear = Preahvihear({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
})
const poppins = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
})

const handleDownload = () => {
    const cvUrl = '/path/to/your_cv.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.download = 'your_cv.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


const Banner = () => {
    return (
        <>
            <div className='py-8'>
                <div className='flex flex-col gap-4'>
                    <h1 className={`${preahvihear.className} text-3xl`}>Khadija Tut Tahera</h1>
                    <div className='flex items-center gap-2'>
                        <h3 className={`${poppins.className} text-lg opacity-90`}>UI/UX Designer</h3>
                        <Image
                            className=''
                            src={logo}
                            alt='Banner Logo'
                            height='48'
                            width='24' />
                    </div>
                    <p className={`${poppins.className} lg:w-3/4 text-[#D3D6DA] text-justify`}>Hey! I am khadija Tut Tahera. Professional UI/UX designer. Expert in visual Design, Wireframing and prototyping, High Fidelity Design.</p>
                </div>
                <div className='w-full flex items-center gap-8 lg:gap-6 mt-10'>
                    <Link href='/contact'
                    className={`flex p-2 border-2 rounded-lg border-sky-600 w-full lg:w-1/3 justify-center bg-sky-600 hover:bg-sky-700 hover:border-sky-700 text-white ${poppins.className}`} >
                        Hire Me
                    </Link>
                    <Link href='https://drive.google.com/file/d/1p4vgJFC-5zq22m0ZaL5n7P6nqpYnkRS4/view?usp=drive_link' 
                    target='_blank' className={`flex p-2 w-full lg:w-1/3 justify-center border-2 rounded-lg hover:bg-sky-600 hover:border-sky-600 border-white text-white ${poppins.className}`}>Download Resume</Link>
                </div>
            </div>
        </>
    );
};

export default Banner;