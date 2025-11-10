import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllSkills from "../Components/AllSkills";
import SkillsType from "../Pages/SkillsType";
import SkillDetails from "../Components/SkillDetails";
import Login from "../Pages/Login";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register";
import Success from "../Pages/Success";
import PrivateRoute from "../Provider/PrivateRoute";
import MultiLogin from "../Components/MultiLogin";
import BookSession from "../Components/BoookSession";
import { path } from "framer-motion/client";
import UserProfile from "../Components/UserProfile";
import ForgotPassword from "../Components/ForgotPassword ";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path:"/success",
        element:(
          <PrivateRoute>
            <Success></Success>
          </PrivateRoute>
        )
      },
      {
        path: "/skillType",
        element:(
          <PrivateRoute>
            <SkillsType></SkillsType>
          </PrivateRoute>
        ),
      },
      {
        path:"/skillType/:id",
        Component: SkillDetails,
      },
      {
        path: "/booksession/:id",
        Component:BookSession,
      }
    ],
  },
  {
    path:"/auth",
    Component: AuthLayout,
    children:[
      {
        path:"multiLogin",
        Component: MultiLogin,
      },
      {
        path:"login",
        Component: Login,
      },
      {
        path:"login/forgotPass",
        Component:ForgotPassword,
      },
      {
        path:"register",
        Component: Register,
      },
      {
        path:"myProfile",
        Component:UserProfile,
      }
    ]
  }
]);

export default router;
