import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

//Component the wraps around parts of app that need acess to user data
export function UserProvider({ children }) {
  const [user, setUser] = useState(); // user = { id, name, email }

  console.log("UserProvider is active. Current user:", user);

  return (
    //Provide the user state and update function to all children components
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// custom hook allows access to user context
export function useUser() {
  return useContext(UserContext);
}