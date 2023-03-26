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
      expritationDate < Date.now()
        ? localStorage.removeItem("userData")
        : setUser(userData);
    }
  }, []);

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContext;
