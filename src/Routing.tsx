import { useRoutes } from "react-router";

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
      element:  <div>sign in page</div>,
    },
    {
      path: "*",
      element: <div>Not Found Page</div>,
    },
  ]);
  return <>{routes}</>;
};

export default Routing;
