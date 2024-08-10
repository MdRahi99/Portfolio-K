import { MdLocationOn } from '@react-icons/all-files/md/MdLocationOn';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';

const Footer = () => {
  return (
    <>
      <div className='py-8 px-8 flex lg:flex-row flex-col lg:items-center justify-between bg-sky-600 text-white'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
          <div className='flex gap-2'>
            <MdLocationOn className='text-2xl' />
            <h1>Dhaka, Bangladesh</h1>
          </div>
          <div className='flex gap-2'>
            <MdEmail className='text-2xl' />
            <h1>khadijatuttahera15@gmail.com</h1>
          </div>
        </div>
        <div className='lg:mt-0 mt-6'>
          <p>©2023 - All Rights Reserved By <span className='font-bold'>Khadija Tut Tahera</span></p>
        </div>
      </div>
    </>
  );
};

export default Footer;