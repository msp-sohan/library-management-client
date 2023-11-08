import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ProtectedRoute from './ProtectedRoute';
import AddBook from '../Pages/AddBook/AddBook';
import AllBooks from '../Pages/AllBooks/AllBooks';
import BorrowedBooks from '../Pages/BorrowedBooks/BorrowedBooks';
import CategoryWiseBook from '../Pages/CategoryWiseBook/CategoryWiseBook';
import SingleBook from '../Pages/SingleBook/SingleBook';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import UpdateBook from '../Pages/UpdateBook/UpdateBook';
import PrivetRoute from './PrivetRoute';
import ReadBook from '../Pages/ReadBook/ReadBook';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
			{
				path: "addBook",
				element: <PrivetRoute><AddBook></AddBook></PrivetRoute>
			},
			{
				path: "allBooks",
				element: <PrivetRoute><AllBooks></AllBooks></PrivetRoute>
			},
			{
				path: "borrowedBooks",
				element: <PrivetRoute><BorrowedBooks></BorrowedBooks></PrivetRoute>
			},
			{
				path: 'categoriesBook/:categoryName',
				element: <CategoryWiseBook></CategoryWiseBook>
			},
			{
				path: "categoriesBook/:categoryName/:id",
				element: <PrivetRoute><SingleBook></SingleBook></PrivetRoute>
			},
			{
				path: "updateBook/:id",
				element: <PrivetRoute><UpdateBook></UpdateBook></PrivetRoute>
			},
			{
				path: "readBook/:id",
				element: <PrivetRoute><ReadBook></ReadBook></PrivetRoute>
			}
		],
	},
	{
		path: '/login',
		element: <ProtectedRoute><Login></Login></ProtectedRoute>,
	},
	{
		path: '/register',
		element: <ProtectedRoute><Register></Register></ProtectedRoute>,
	},
]);

export default router;
