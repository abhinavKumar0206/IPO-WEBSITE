import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('bluestock_user');
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        // Check if parsed object is valid
        if (parsedUser.name && parsedUser.email && parsedUser.role) {
          setUserState(parsedUser);
        } else {
          localStorage.removeItem('bluestock_user');
        }
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      localStorage.removeItem('bluestock_user');
    }
  }, []);

  const setUser = (userData: User) => {
    setUserState(userData);
    localStorage.setItem('bluestock_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUserState(null);
    localStorage.removeItem('bluestock_user');
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
