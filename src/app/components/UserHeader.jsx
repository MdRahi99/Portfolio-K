import { FaBars } from '@react-icons/all-files/fa/FaBars';
import Link from 'next/link';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaBehance } from '@react-icons/all-files/fa/FaBehance';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';

const UserHeader = () => {
    return (
        <>
            <div className="drawer flex items-center justify-end lg:justify-start bg-slate-800 py-4 rounded-lg">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar text-white">
                        <div className="flex-none lg:hidden z-50">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="text-black bg-white p-2 rounded-lg">
                                <FaBars />
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <h1 className='text-2xl font-bold ml-6 mb-4'>Khadija Tut Tahera</h1>
                            <ul className="menu flex gap-2 menu-vertical">
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/projects'>Projects</Link></li>
                                <li><Link href='/process'>Work Process</Link></li>
                                <li><Link href='/expertise'>Expertise</Link></li>
                                <li><Link href='/contact'>Contact</Link></li>
                            </ul>

                            <div className='flex items-center gap-8 ml-6 mt-3'>
                                <Link href='https://www.facebook.com/Khadijatuttahara/' target='_blank'><FaFacebook className='text-2xl hover:text-[#cccbcb]' /></Link>
                                <Link href='https://www.behance.net/khadijatahera' target='_blank'><FaBehance className='text-2xl hover:text-[#cccbcb]' /></Link>
                                <Link href='https://www.linkedin.com/in/khadija-tut-tahera-0117b0212/' target='_blank'><FaLinkedin className='text-2xl hover:text-[#cccbcb]' /></Link>
                                <FaInstagram className='text-2xl hover:text-[#cccbcb]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 flex gap-2 w-80 h-96 pt-12 bg-base-200">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/projects'>Projects</Link></li>
                        <li><Link href='/process'>Work Process</Link></li>
                        <li><Link href='/expertise'>Expertise</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                        {/* Social Links */}
                        <div className='flex items-center gap-8 ml-4 mt-6'>
                            <Link href='https://www.facebook.com/Khadijatuttahara/' target='_blank'><FaFacebook className='text-2xl hover:text-[#cccbcb]' /></Link>
                            <Link href='https://www.behance.net/khadijatahera' target='_blank'><FaBehance className='text-2xl hover:text-[#cccbcb]' /></Link>
                            <Link href='https://www.linkedin.com/in/khadija-tut-tahera-0117b0212/' target='_blank'><FaLinkedin className='text-2xl hover:text-[#cccbcb]' /></Link>
                            <FaInstagram className='text-2xl hover:text-[#cccbcb]' />
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default UserHeader;