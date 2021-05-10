import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      return null;
    }
    return setAuth(JSON.parse(user));
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { auth, setAuth } = context;
  return { auth, setAuth };
};
