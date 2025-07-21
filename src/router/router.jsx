import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import CategoryWiseBooks from "../pages/CategoryWiseBooks/CategoryWiseBooks";
import BookDetails from "../components/BookDetails";
import PrivateRoute from "./PrivateRoute";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import UpdateBook from "../pages/UpdateBook/UpdateBook";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/books/:category',
                element: <CategoryWiseBooks></CategoryWiseBooks>
            },
            {
                path: '/book-details/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>

            },
            {
                path: '/borrowed-books',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path: '/update-book/:id',
                element: <PrivateRoute> <UpdateBook></UpdateBook> </PrivateRoute>
            },
            {
                path: '/all-books',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path: '/add-book',
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
        ]
    }
])


export default router