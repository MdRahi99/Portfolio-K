'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Loading from '../loading';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/user-info');
        setUser(res.data.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      setUser(res.data.data);
      toast.success('Login Successful');
      router.push('/admin');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const signup = async (name, email, password) => {
    try {
      const res = await axios.post('/api/auth/signup', { name, email, password });
      setUser(res.data.savedUser);
      toast.success('Signup Successful');
      router.push('/login'); 
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      await axios.get('/api/auth/logout');
      setUser(null);
      toast.success('Logout Successful');
      router.push('/login');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
