import { useRoutes } from "react-router";
import { Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Ads from "./modules/ads";
import Layout from "./Layout";

const Routing = () => {
  // dummy variable for protected routes
  const isAuth = true;

  const routes = useRoutes([
    {
      path: "/dashboard",
      element: isAuth ? <Layout /> : <Navigate to="/login" />,
      children: [
        {
          path: "ads",
          element: <Ads />,
        },
      ],
    },
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <div>Not Found Page</div>,
    },
  ]);
  return <>{routes}</>;
};

export default Routing;
