'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useState, useEffect } from 'react';
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

    if (!user) {
      fetchData();
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      setUser(res.data.data);
      router.push('/admin');
    } catch (error) {
      console.log(error.message);
    }
  };

  const signup = async (name, email, password) => {
    try {
      const res = await axios.post('/api/auth/signup', { name, email, password });
      setUser(res.data.savedUser);
      await logout();
      router.push('/login'); 
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await axios.get('/api/auth/logout');
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
