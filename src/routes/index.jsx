import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  NavLink,
  Route,
  RouterProvider,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import Loader from "../components/common/Loader";
import { useEffect } from "react";
const BackDrop = lazy(() => import("../components/common/BackDrop"));
//dashboard
const DashMaster = lazy(() => import("../layouts/dashboard/DashMaster"));
const DashboardHome = lazy(() => import("../pages/dash/DashboardHome"));
const DashSettings = lazy(() => import("../pages/dash/DashSettings"));
const User = lazy(() => import("../pages/dash/Users"));
const CommunityManagers = lazy(() => import("../pages/dash/CommunityManagers"));
const CommunityPage = lazy(() => import("../pages/dash/CommunityPage"));

//front
const FrontMaster = lazy(() => import("../layouts/front/FrontMaster"));
const LandingPage = lazy(() => import("../pages/front/LandingPage"));

//login
const AuthMaster = lazy(() => import("../layouts/auth/AuthMaster"));
const Login = lazy(() => import("../pages/auth/Login"));

//register
const Register = lazy(() => import("../pages/auth/Register"));

const AuthGaurd = ({ children }) => {
  const isAuth = true;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/", { replace: true });
    }
  });
  return children;
};

export default function Router() {
  const routes = useRoutes([
    //login
    {
      path: "/login",
      element: <Login />,
    },
    //register
    {
      path: "/register",
      element: <Register />,
    },

    //for admin
    {
      path: "/dashboard",
      element: (
        <AuthGaurd>
          <DashMaster />
        </AuthGaurd>
      ),
      children: [
        { path: "", element: <DashboardHome /> },
        { path: "community", element: <CommunityPage /> },
        { path: "settings", element: <DashSettings /> },
        { path: "users", element: <User /> },
        { path: "subadmin", element: <CommunityManagers /> },
      ],
    },
    //for front
    {
      path: "/",
      element: <AuthMaster/>,
    },
    {
      path: "/home",
      element: (
        <AuthGaurd>
          <FrontMaster />
        </AuthGaurd>
      ),
      children: [{ index: true, element: <LandingPage /> }],
    },
  ]);

  //   const routes = createBrowserRouter(
  //     createRoutesFromElements(
  //       <Route
  //         path="/dashboard"
  //         element={
  //           <AuthGaurd>
  //             <DashMaster />
  //           </AuthGaurd>
  //         }
  //       >
  //         <Route path="" element={<DashboardHome />}></Route>
  //         <Route path="settings" element={<DashSettings />}></Route>
  //       </Route>
  //     )
  //   );
  return <Suspense fallback={<Loader />}>{routes}</Suspense>;
}
