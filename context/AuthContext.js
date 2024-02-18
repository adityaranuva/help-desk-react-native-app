import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isSignedIn: false,
    role: null, 
  });

  const signIn = (role) => setAuthState({ isSignedIn: true, role: role });

  const signOut = () => setAuthState({ isSignedIn: false, role: null });

  return (
    <AuthContext.Provider value={{ ...authState, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
