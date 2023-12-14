'use client'

import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';
import UserHeader from './UserHeader';
import AdminHeader from './AdminHeader';
import Loading from '../loading';

const Header = () => {

    const { user, loading } = useContext(UserContext);

    if(loading){
        return <Loading />
    }

    return (
        <>
            {
                user?.email ?
                    <AdminHeader />
                    :
                    <UserHeader />
            }
        </>
    );
};

export default Header;