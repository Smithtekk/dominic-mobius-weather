import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './app.styled';
import { AppStore } from './store/store';
import { darkTheme, lightTheme } from './theme';
import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Login from "./pages/Login";
import Home from './pages/Home';

function App() {
  const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const { authed } = useAuth();
    return authed === true ? children : <Navigate to="/login" replace />;
  };
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          // Setting requireAuth with protected routes
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Routes>
    <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;