import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const Contact = () => {
    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>Contact</h1>
                <div className='lg:w-1/2 mx-auto text-center mt-10 flex flex-col gap-4'>
                    <h1 className={`${poppins.className} text-lg`}>Get In Touch</h1>
                    <p className='text-sm'>Feel free to get in touch with me. I am always open to discussing New Projects & Creative ideas</p>
                </div>

                <form className='my-16 flex flex-col gap-8'>
                    <input type="text" placeholder="Name" className={`input input-bordered rounded-none focus:outline-none text-white w-full lg:w-2/3 mx-auto ${poppins.className}`} />
                    <input type="email" placeholder="Email" className={`input input-bordered rounded-none focus:outline-none text-white w-full lg:w-2/3 mx-auto ${poppins.className}`} />
                    <input type="text" placeholder="Subject" className={`input input-bordered rounded-none focus:outline-none text-white w-full lg:w-2/3 mx-auto ${poppins.className}`} />
                    <textarea className={`textarea textarea-bordered rounded-none focus:outline-none text-white w-full lg:w-2/3 mx-auto ${poppins.className}`} placeholder="Message"></textarea>
                    <input type="submit" className={`input bg-[#00A8CC] rounded-none focus:outline-none text-white hover:bg-sky-600 w-full lg:w-2/3 mx-auto ${poppins.className}`} />
                </form>
            </div>
        </>
    );
};

export default Contact;