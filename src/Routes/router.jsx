import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFoud from "../pages/NotFound404/NotFoud";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFoud/> ,
        children:[
            {
                path: '/',
                loader: ()=> fetch('categories.json') ,
                element: <Home/>

            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
]);

export default router;