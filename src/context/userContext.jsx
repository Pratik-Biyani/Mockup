import { createContext, useState, useContext } from 'react';

// Create a UserContext
const UserContext = createContext();

// Create a provider for the UserContext
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Manage user state

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user context
export const useUser = () => {
  return useContext(UserContext);
};
