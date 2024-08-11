'use client'

import { FaBars, FaBehance, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';
import { Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
});

const navLinks = [
    { href: '/admin', label: 'Home' },
    { href: '/admin/add-profile', label: 'Add Profile' },
    { href: '/admin/add-project', label: 'Add Project' },
    { href: '/admin/add-skill', label: 'Add Skill' },
    { href: '/admin/add-resume', label: 'Add Resume' },
    { href: '/admin/all-projects', label: 'All Projects' },
    { href: '/admin/all-skills', label: 'All Skills' },
];

const socialLinks = [
    { href: 'https://www.facebook.com/Khadijatuttahara/', icon: <FaFacebook className='text-2xl hover:text-[#cccbcb]' /> },
    { href: 'https://www.behance.net/khadijatahera', icon: <FaBehance className='text-2xl hover:text-[#cccbcb]' /> },
    { href: 'https://www.linkedin.com/in/khadija-tut-tahera-0117b0212/', icon: <FaLinkedin className='text-2xl hover:text-[#cccbcb]' /> },
    { href: 'https://www.instagram.com/', icon: <FaInstagram className='text-2xl hover:text-[#cccbcb]' /> },
];

const AdminHeader = () => {
    const { user, logout } = useContext(UserContext);
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
                        <h1 className='text-2xl font-bold ml-6 mb-8'>{user?.name}</h1>
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
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button onClick={logout} className={`${poppins.className} px-4 py-1 rounded-lg bg-sky-700 hover:bg-sky-500 text-white mt-4`}>
                                    Logout
                                </button>
                            </li>
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
                <ul className="p-4 flex flex-col gap-8 w-80 rounded-br-lg h-fit pt-12 bg-slate-900">
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
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button onClick={logout} className={`${poppins.className} px-4 py-1 rounded-lg bg-sky-700 hover:bg-sky-500 text-white mt-4`}>
                            Logout
                        </button>
                    </li>
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

export default AdminHeader;
