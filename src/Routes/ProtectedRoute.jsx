import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
	const { user } = useAuth();

	if (user) {
		return <Navigate to="/"></Navigate>;
	} else {
		return children;
	}
};

export default ProtectedRoute;
