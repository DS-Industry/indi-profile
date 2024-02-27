import React, { createContext, useContext, useState, useEffect } from "react";

interface IUserContext {
  user: {
    name: string | null;
    email: string;
  } | null;
  setUser: (
    user: {
      name: string | null;
      email: string;
    } | null
  ) => void;
}

const UserContext = createContext<IUserContext | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{
    name: string | null;
    email: string;
  } | null>(null);

  const handleUserChange = () => {};

  useEffect(() => {
    handleUserChange();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("useTheme must be used with in UserProvider");
  }

  return context;
}
