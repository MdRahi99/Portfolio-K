import { MdLocationOn } from '@react-icons/all-files/md/MdLocationOn';
import { FaPhone } from '@react-icons/all-files/fa/FaPhone';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';

const Footer = () => {
  return (
    <>
      <div className='py-8 px-8 lg:px-24 bg-[#00A8CC] text-white'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-4 justify-between'>
          <div className='flex items-center gap-2'>
            <MdLocationOn />
            <h1>Dhaka, Bangladesh</h1>
          </div>
          <div className='flex items-center gap-2'>
            <FaPhone />
            <h1>+88019********</h1>
          </div>
          <div className='flex items-center gap-2'>
            <MdEmail />
            <h1>khadijatuttahera15@gmail.com</h1>
          </div>
        </div>
        <div className='mt-12 lg:text-center w-full'>
          <p>Copyright @ 2023-All Right Reserved By Khadija</p>
        </div>
      </div>
    </>
  );
};

export default Footer;