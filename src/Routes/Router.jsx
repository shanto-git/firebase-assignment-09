import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllSkills from "../Pages/AllSkills";

const router=createBrowserRouter(
    [
        {
            path:"/",
            Component:HomeLayout,
            children:[
                {
                    path:"",
                    Component: Home,
                },
                {
                    path:"/allSkill",
                    Component:  AllSkills,
                }
            ]
        }
    ]
)

export default router