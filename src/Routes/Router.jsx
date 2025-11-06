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
        Component:Success,
      },
      {
        path: "/skillType",
        Component: SkillsType,
      },
      {
        path:"/skillType/:id",
        Component: SkillDetails,
      },
    ],
  },
  {
    path:"/auth",
    Component: AuthLayout,
    children:[
      {
        path:"login",
        Component: Login,
      },
      {
        path:"register",
        Component: Register,
      }
    ]
  }
]);

export default router;
