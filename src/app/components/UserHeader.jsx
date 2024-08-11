import { FaBars, FaBehance, FaLinkedin, FaDribbble, FaTasks } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { LuAppWindow } from 'react-icons/lu';
import { LiaMedapps } from 'react-icons/lia';
import { MdOutlineContactSupport } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home', icon: <FiHome className='text-lg' /> },
    { href: '/projects', label: 'Projects', icon: <LuAppWindow className='text-lg' /> },
    { href: '/process', label: 'Work Process', icon: <FaTasks className='text-lg' /> },
    { href: '/expertise', label: 'Expertise', icon: <LiaMedapps className='text-lg' /> },
    { href: '/contact', label: 'Contact', icon: <MdOutlineContactSupport className='text-lg' /> },
];

const socialLinks = [
    { href: 'https://www.behance.net/khadijatuttahera', icon: <FaBehance className='text-2xl hover:text-[#cccbcb]' /> },
    { href: 'https://www.linkedin.com/in/khadija-tut-tahera-0117b0212/', icon: <FaLinkedin className='text-2xl hover:text-[#cccbcb]' /> },
    { href: 'https://dribbble.com/Khadijatuttahera', icon: <FaDribbble className='text-2xl hover:text-[#cccbcb]' /> },
];

const UserHeader = () => {
    const path = usePathname();

    return (
        <div className="drawer flex items-center justify-end lg:justify-start">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar text-white">
                    <div className="flex-none lg:hidden z-50">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="text-black cursor-pointer hover:bg-sky-700 hover:text-white bg-white p-2 rounded-lg">
                            <FaBars />
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <h1 className='text-2xl font-bold ml-6 mb-8'>Khadija Tut Tahera</h1>
                        <ul className="flex flex-col gap-8 ml-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href} 
                                        className={`flex items-center gap-2 text-[16px] p-2 rounded-lg transition-colors duration-200 ${
                                            path === link.href 
                                            ? 'text-white bg-sky-600' 
                                            : 'text-white hover:bg-slate-700'
                                        }`}
                                    >
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className='flex items-center gap-8 ml-6 mt-8'>
                            {socialLinks.map((link, index) => (
                                <Link key={index} href={link.href} target='_blank'>
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="p-4 flex flex-col gap-8 w-96 rounded-br-lg h-fit pt-12 bg-slate-900">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link 
                                href={link.href} 
                                className={`flex items-center gap-2 text-[16px] p-2 rounded-lg transition-colors duration-200 ${
                                    path === link.href 
                                    ? 'text-white bg-sky-600' 
                                    : 'hover:bg-slate-700'
                                }`}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                    <div className='flex items-center gap-8 ml-4 mt-6'>
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.href} target='_blank'>
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default UserHeader;