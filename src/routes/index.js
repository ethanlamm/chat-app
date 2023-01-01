import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts";

// config DEFAULT_PATH='/app'
import { DEFAULT_PATH } from "../config";
// loading...
import LoadingScreen from "../components/LoadingScreen";

// 懒加载
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const GeneralApp = Loadable(
  lazy(() => import("../pages/Dashboard/GeneralApp")),
);
const Settings = Loadable(
  lazy(() => import("../pages/Dashboard/Settings")),
);
const Page404 = Loadable(lazy(() => import("../components/Page404")));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
