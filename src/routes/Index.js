import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home/Index";
import UserInfo from "../views/UserInfo/Index";
import Error from "../views/Error/Index";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:username",
    element: <UserInfo />,
    errorElement: <Error />,
    loader: async ({ params }) => {
      try {
        let result = await axios.get(`data/${params.username}.json`);
        return result;
      } catch (error) {
        console.log("Getting user error", error);
        return false;
      }
    },
  },
]);

export default function Pages() {
  return <RouterProvider router={router} />;
}
