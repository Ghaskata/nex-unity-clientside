import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";
import { axiosPrivate } from "./axios";

const useAxiosPrivate = () => {
  const { isAuthenticated, userData, sessionId, token, login, logout } =
    useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (isAuthenticated) {
          config.headers["Authorization"] = `Bearer ${token}`;
          config.headers["session"] = sessionId;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => Promise.reject(error)
    );
  }, [token, isAuthenticated, sessionId]);
  return axiosPrivate;
};

export default useAxiosPrivate;
