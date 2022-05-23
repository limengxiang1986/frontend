import Dashboard from "../pages/dashboard";
import Gic from "../pages/gic";
import Online from "../pages/online";

const routes = [
    {
        path:"/",
        exact :true,
        component:Dashboard
    },
    {
        path:"/online",
        component:Online
    },
    {
        path:"/gic",
        component:Gic
    },
]

export default routes;
