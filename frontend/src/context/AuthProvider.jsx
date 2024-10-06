import React, { createContext } from 'react'
import UseFirebase from '../hooks/UseFirebase'
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  // const{children} = props;
  const allContexts = UseFirebase();
  return (
    <AuthContext.Provider value={allContexts}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;