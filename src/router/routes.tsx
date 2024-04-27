import WelcomePage from "../pages/welcome.tsx";
import {JSX} from "react";

import LastElementTask from "../pages/1-js-tasks/1-last-elements.tsx";
import GroupAndCount from "../pages/1-js-tasks/2-group-and-count.tsx";
import Refactoring from "../pages/1-js-tasks/3-refactoring.tsx";
import SimpleTable from "../pages/3-react-task/simple-table.tsx";

export interface IRoute {
    url: string,
    component: JSX.Element,
    title: string
}

export const routes: IRoute[] = [
    {
        url: "/",
        component: <WelcomePage/>,
        title: "Главная"
    },
    {
        url: "/js-tasks/1",
        component: <LastElementTask/>,
        title: "JS-1"
    },
    {
        url: "/js-tasks/2",
        component: <GroupAndCount/>,
        title: "JS-2"
    },
    {
        url: "/js-tasks/3",
        component: <Refactoring/>,
        title: "JS-3"
    },
    {
        url: "/react-table",
        component: <SimpleTable/>,
        title: "React"
    }
]
