import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const data = { user, setUser };

  useEffect(() => {
    let userData = localStorage.userData;
    if (userData) {
      userData = JSON.parse(userData);
      const expritationDate = new Date(userData.exp * 1000);
      if (expritationDate < Date.now()) {
        console.log("token expirado");
        localStorage.removeItem("userData");
      } else {
        console.log("token valido");
        setUser(userData);
      }
    }
  }, []);

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContext;
