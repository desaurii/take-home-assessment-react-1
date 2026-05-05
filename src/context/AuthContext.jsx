import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  const isAuth = !!user;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setLoading(false);
          setUser(null);
          return;
        }

        const res = await fetch("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          localStorage.removeItem("token");
          setUser(null);
          setLoading(false);
          return;
        }

        const user = await res.json();
        setUser(user);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ loading, login, logout, user, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
