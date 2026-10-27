import Root from "../layouts/Root";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import { createBrowserRouter } from "react-router";
import Templates from "../pages/Templates";
import Examples from "../pages/Examples";
import Pricing from "../pages/Pricing";
import MyResumes from "../pages/MyResumes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/templates",
        element: <Templates></Templates>,
      },
      {
        path: "/examples",
        element: <Examples></Examples>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/myResumes",
        element: <MyResumes></MyResumes>,
      },
    ],
  },
]);

export default router;
