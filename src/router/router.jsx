import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import CategoryWiseBooks from "../pages/CategoryWiseBooks/CategoryWiseBooks";
import BookDetails from "../components/BookDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h3>error</h3>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'books/:category',
                element:<CategoryWiseBooks></CategoryWiseBooks>
            },
            {
                path:'book-details/:id',
                element:<BookDetails></BookDetails>
                
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'login',
                element:<Login></Login>
            },
        ]
    }
])


export default router