import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllSkills from "../Components/AllSkills";
import SkillsType from "../Pages/SkillsType";

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
        path: "/skillType",
        Component: SkillsType,
      },
    ],
  },
]);

export default router;
