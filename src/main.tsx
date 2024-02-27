import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/MainPage.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SuccessPage from "./pages/SuccessPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import { UserProvider } from "./context/UserProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/auth/signup",
    element: <RegistrationPage />,
  },
  {
    path: "/auth/signin",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Suspense>
  </React.StrictMode>
);
