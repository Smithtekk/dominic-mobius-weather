import React, { useState, createContext, useContext, useEffect } from "react";

const REACT_APP_WEATHER_API_KEY = '20571ab45c74dc2a1897b60c5b8047a1';

// Init types for AuthObj
export interface AuthObj {
  email: string;
  password: string;
}
// Using Authcontext as a context object
const authContext = createContext({ authed: false, login: (obj: AuthObj): boolean => false });

const useAuth = () => {
  const [authed, setAuthed] = useState<boolean>(false);
  const apiToken = localStorage.getItem('apiToken');
  // Checking for correct apiToken
  useEffect(() => {
    if (apiToken && apiToken !== '') {
      setAuthed(true);
    }
  }, [apiToken])

  // If so, authentication is returned
  return {
    authed,
    login: (obj: AuthObj) => {
      localStorage.setItem('apiToken', REACT_APP_WEATHER_API_KEY);
      setAuthed(true);
      return true;
    }
  };
}

export function AuthProvider(props: { children: JSX.Element; }) {
  const { children } = props;
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return useContext(authContext);
}