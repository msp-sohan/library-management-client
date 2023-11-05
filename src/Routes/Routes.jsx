import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <div>Error</div>,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
			{
				path: 'login',
				element: (
					<ProtectedRoute>
						<Login></Login>
					</ProtectedRoute>
				),
			},
			{
				path: 'register',
				element: (
					<ProtectedRoute>
						<Register></Register>
					</ProtectedRoute>
				),
			},
		],
	},
]);

export default router;
