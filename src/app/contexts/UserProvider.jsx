'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Loading from '../loading';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/user-info');
        setData(res.data.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const logout = async () => {
    try {
      await axios.get('/api/auth/logout');
      toast.success('Logout Successful');
      router.push('/login');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  // Wait until data is fetched before providing the context
  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider value={{ data, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
