import React, { useState, useEffect, lazy, Suspense } from "react";
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
import { isAuthenticated } from "../reducers/authSlice";
import { useSelector } from "react-redux";

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
const AboutUsPage = lazy(() => import("../pages/front/AboutUsPage"));
const AddPostPage = lazy(() => import("../pages/front/AddPostPage"));
const ContactUsPage = lazy(() => import("../pages/front/ContactUsPage"));
const DonationPage = lazy(() => import("../pages/front/DonationPage"));
const EventsPage = lazy(() => import("../pages/front/EventsPage"));
const FrontCommunityPage = lazy(() =>
  import("../pages/front/FrontCommunityPage")
);
const FrontSettingPage = lazy(() => import("../pages/front/FrontSettingPage"));
const JobsPage = lazy(() => import("../pages/front/JobsPage"));
const NewsPage = lazy(() => import("../pages/front/NewsPage"));
const ProfilePage = lazy(() => import("../pages/front/ProfilePage"));

//login
const AuthMaster = lazy(() => import("../layouts/auth/AuthMaster"));
const Login = lazy(() => import("../pages/auth/Login"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));

//register
const Register = lazy(() => import("../pages/auth/Register"));

//Notfound page
const NotFoundPage = lazy(() => import("../components/common/NotFoundPage"));

const AuthGaurd = ({ children }) => {
  const isAuth = useSelector(isAuthenticated);
  console.log("is Auth", isAuth);
  if (isAuth) {
    return children;
  }
  return <AuthMaster />;
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
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
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
      element: (
        <AuthGaurd>
          <FrontMaster />
        </AuthGaurd>
      ),
      children: [
        { index: true, path: "", element: <LandingPage /> },
        { path: "add-post", element: <AddPostPage /> },
        { path: "community", element: <FrontCommunityPage /> },
        { path: "jobs", element: <JobsPage /> },
        { path: "events", element: <EventsPage /> },
        { path: "news", element: <NewsPage /> },
        { path: "contact-us", element: <ContactUsPage /> },
        { path: "about-us", element: <AboutUsPage /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "dontaion", element: <DonationPage /> },
        { path: "settings", element: <FrontSettingPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Suspense fallback={<Loader />}>{loading ? <Loader /> : routes}</Suspense>
  );
}
