import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/MainPage.tsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SuccessPage from "./pages/SuccessPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import { UserProvider } from "./context/UserProvider.tsx";
import Landing from "./pages/Landing";
import TermPage from "./pages/TermPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import RefundPage from "./pages/RefundPage.tsx";

const router = createHashRouter([
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
  {
    path: 'home',
    element: <Landing />
  },
  {
    path: 'term',
    element: <TermPage/>
  },
  {
    path: 'privacy',
    element: <PrivacyPage/>
  },
  {
    path: 'refund',
    element: <RefundPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback="...is loading">
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </Suspense>
);
