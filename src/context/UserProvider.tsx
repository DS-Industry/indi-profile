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
  getUser: () => {
    name: string | null;
    email: string;
  } | null;
}

const UserContext = createContext<IUserContext | null>(null);

function getSessionStorageOrDefault(key: string, defaultValue: null) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const store = sessionStorage;
  const [user, setUser] = useState<{
    name: string | null;
    email: string;
  } | null>(getSessionStorageOrDefault("user", null));

  const handleUserChange = () => {
    store.setItem("user", JSON.stringify(user));
  };

  const getUser = () => {
    const storedUser = store.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      return JSON.parse(storedUser);
    }
    return null;
  };

  useEffect(() => {
    if (!user) {
      handleUserChange();
    }
  }, [user]);

  useEffect(() => {});

  return (
    <UserContext.Provider value={{ user, setUser, getUser }}>
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
