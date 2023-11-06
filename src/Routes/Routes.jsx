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

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home></Home>,
				loader: () => fetch('../../public/category.json')
			},
			{
				path: "addBook",
				element: <AddBook></AddBook>
			},
			{
				path: "AllBooks",
				element: <AllBooks></AllBooks>
			},
			{
				path: "borrowedBooks",
				element: <BorrowedBooks></BorrowedBooks>
			},
			{
				path: 'categoriesBook/:categoryName',
				element: <CategoryWiseBook></CategoryWiseBook>
			},
			{
				path: "categoriesBook/:categoryName/:id",
				element: <SingleBook></SingleBook>
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
