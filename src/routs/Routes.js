import { Suspense, useEffect } from "react";
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../pages/Login/Login";
import Page404 from "../pages/Page404/Page404";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
  const location = useLocation();
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");

  //   useEffect(() => {
  //     if (!authToken && location.pathname !== "/login") {
  //       navigate("/login");
  //     }
  //   }, [location, navigate, authToken]);

  const routes = useRoutes([
    {
      element: (
        <ProtectedRoute>
          <DashboardLayout>
            <Suspense fallback={<div> Loading ....</div>}>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Navigate to="/dashboard" /> },
        { path: "dashboard", element: <Dashboard /> },
      ],
    },
    {
      path: "/login",
      element: authToken ? <Navigate to="/dashboard" /> : <Login />,
    },
    {
      path: "/404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
