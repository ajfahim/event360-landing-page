import AdminLayout from "@/components/layouts/AdminLayout";
import MainLayout from "@/components/layouts/MainLayout";
import Dashboard from "@/pages/Dashboard";
import EventItems from "@/pages/Dashboard/EventItems";
import Home from "@/pages/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "event-items",
        element: <EventItems />,
      },
    ],
  },
]);

export default router;
