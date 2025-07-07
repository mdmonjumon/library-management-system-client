import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h3>error</h3>,
        children: [
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])


export default router