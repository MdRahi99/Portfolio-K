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
            <div className='py-20 px-8 lg:px-24 text-white my-12'>
                <div className='flex flex-col gap-8'>
                    <h1 className={`${preahvihear.className} text-3xl lg:text-left text-center`}>Khadija Tut Tahera</h1>
                    <div className='flex items-center lg:justify-start justify-center gap-2'>
                        <h3 className={`${poppins.className} text-2xl`}>UI/UX Designer</h3>
                        <Image
                            className='mt-5'
                            src={logo}
                            alt='Banner Logo'
                            height='48'
                            width='48' />
                    </div>
                    <p className={`${poppins.className} text-[#D3D6DA] text-justify`}>Hey! I am khadija Tut Tahera. Professional UI/UX designer. Expert in visual Design, Wireframing and prototyping, High Fidelity Design.</p>
                </div>
                <div className='w-full flex items-center gap-3 lg:gap-6 mt-10'>
                    <Link href='/contact'
                    className={`flex p-2 border-2 border-[#FF6464] w-1/2 justify-center bg-[#FF6464] hover:bg-[#f29494] hover:border-[#f29494] text-white ${poppins.className}`} >
                        Hire Me
                    </Link>
                    <Link href='/https://drive.google.com/file/d/1p4vgJFC-5zq22m0ZaL5n7P6nqpYnkRS4/view?usp=drive_link' 
                    target='_blank' className={`flex p-2 w-1/2 justify-center border-2 hover:bg-[#FF6464] hover:border-[#FF6464] border-white text-white ${poppins.className}`}>Download Resume</Link>
                </div>
            </div>
        </>
    );
};

export default Banner;