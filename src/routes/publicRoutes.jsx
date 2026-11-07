import Root from "../layouts/Root";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import { createBrowserRouter } from "react-router";
import Pricing from "../pages/Pricing";
import MyResumes from "../pages/MyResumes";
import SignUp from "../pages/SignUp";
import ResumeExamples from "../pages/ResumeExamples";
import ResumeTemplates from "../pages/ResumeTemplates";
import EmailLogin from "../pages/EmailPassLoginForm";

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/resumeTemplates",
        element: <ResumeTemplates></ResumeTemplates>,
      },
      {
        path: "/resumeExamples",
        element: <ResumeExamples></ResumeExamples>,
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
        path: "/signin/emailPassForm",
        element: <EmailLogin></EmailLogin>,
      },
      {
        path: "/myResumes",
        element: <MyResumes></MyResumes>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default publicRoutes;
