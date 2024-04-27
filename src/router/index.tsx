import {Route, Routes} from "react-router-dom";
import {routes} from "./routes.tsx";


export default function Router() {
    return (
        <Routes>
            {routes.map((item) => {
                if (item?.component) {
                    return (
                        <Route
                            key={item.url}
                            path={item.url}
                            element={item.component}
                        />
                    )
                }
            })}
        </Routes>)
}
