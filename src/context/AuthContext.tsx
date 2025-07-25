
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, AuthContextType, defaultAuthContext } from "../types/authTypes";
import React from "react"

const AuthContext = createContext<AuthContextType>(defaultAuthContext);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const navigate = useNavigate();

  const BACKEND_URL = "http://localhost:5000/api/v1"


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get(`${BACKEND_URL}/user/me`, { headers: { Authorization: `Bearer ${token}` } })

        .then(({ data }) => {
          setUser({ username: data.username, avtar: data.avtar });
        })
        .catch(() => {
          localStorage.removeItem("token");
          setUser(null);
        });
    }
  }, []);

  console.log(user?.avtar)


  const adminLogin = async (username: string, password: string) => {
    try {
      const { data } = await axios.post(` ${BACKEND_URL}/admin/signin`, { username, password });

      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  const AdminSignUp = async (username: string, password: string) => {
    try {
      const { data } = await axios.post(` ${BACKEND_URL}/admin/signup`, { username, password });

      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);

    }
  }

  const login = async (username: string, password: string) => {
    try {
      const { data } = await axios.post(` ${BACKEND_URL}/user/signin`, { username, password });

      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const signup = async (username: string, password: string) => {
    try {
      const { data } = await axios.post(` ${BACKEND_URL}/user/signup`, { username, password });

      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);

    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ signup, adminLogin, AdminSignUp, user, login, logout, isvalidate: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;

};


