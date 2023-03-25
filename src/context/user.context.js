import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const data = { user, setUser };

  useEffect(() => {
    const userData = localStorage.userData;
    userData && setUser(JSON.parse(userData));
  }, []);

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContext;
