import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import Home from "./Pages/Home";
import Dashboard from "./compponents/Dashboard";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>,
    },
    {
        path: "/user",
        element: <UserPrivateRoute></UserPrivateRoute>,
    },
    {
        path: "/home",
        element: <Home></Home>,
        children: [
            {
                path: '/home',
                element: <Dashboard></Dashboard>,
            },
        ],
    },
]);
export default router;