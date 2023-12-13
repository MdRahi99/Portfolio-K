'use client'

import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';
import UserHeader from './UserHeader';
import AdminHeader from './AdminHeader';

const Header = () => {

    const { user } = useContext(UserContext);

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