import { useRoutes } from "react-router";
import SignIn from "./pages/SignIn";

const Routing = () => {
  const routes = useRoutes([
    {
      path: "/dashboard",
      children: [
        {
          path: "ads",
          element: <div>Adds Page</div>,
        },
      ],
    },
    {
      path: "login",
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
