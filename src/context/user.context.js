import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}) {
  const [user, setUser] = useState({});

  const data = {user, setUser};
    
  return (
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContext;

