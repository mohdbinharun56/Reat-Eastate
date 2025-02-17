import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children:[
            {
                path: '/',
                loader: ()=> fetch('categories.json') ,
                element: <Home/>

            }
        ]
    }
]);

export default router;