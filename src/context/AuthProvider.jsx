import { createContext, useContext } from "react";

const AuthContex = createContext({
  isAuthenticated: false,
  userData: "",
  sessionId: "",
  token: "",
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContex);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [token, setToken] = useState(null);

  // Placeholder login function (replace with your actual login logic)
  const login = (userData, sessionId, token) => {
    setIsAuthenticated(true);
    setUserData(userData);
    setSessionId(sessionId);
    setToken(token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    setSessionId(null);
    setToken(null);
  };

  return (
    <AuthContex.Provider
      value={{ isAuthenticated, userData, sessionId, token, login, logout }}
    >
      {children}
    </AuthContex.Provider>
  );
};

export { AuthContex, AuthProvider, useAuth };
