import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap'
})

const UserProfile = ({params}) => {
    return (
        <>
            <div className='py-20 px-8 lg:px-24 text-white'>
                <h1 className={`text-2xl text-center lg:text-left ${poppins.className}`}>Admin Name: <span className='shadow-inner text-lg shadow-white px-3 py-1 uppercase ml-4 rounded-lg'>{params.id}</span></h1>
            </div>
        </>
    );
};

export default UserProfile;