import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFoud from "../pages/NotFound404/NotFoud";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import EastateDetails from "../pages/EastateDetails/EastateDetails";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children:[
            {
                path: '/',
                // loader: ()=> fetch('categories.json') ,
                element: <Home/>

            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/eastate-details/:id',
                element: <ProtectedRoutes>
                    <EastateDetails/>
                </ProtectedRoutes>
            },
            {
                path: '/update',
                element: <ProtectedRoutes>
                    <UpdateProfile/>
                </ProtectedRoutes>
            }
        ],
        errorElement: <NotFoud/>

    }
]);

export default router;