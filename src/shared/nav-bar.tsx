import {routes} from "../router/routes.tsx";
import {Link} from "react-router-dom";


export default function NavBar() {
    return (
        <nav className={"flex gap-4 justify-end mx-4"}>
            {routes.map((route) => {
                return (
                    <Link to={route.url} className={"text-xl"}>
                        {route.title}
                    </Link>
                )
            })}
        </nav>
    )
}
