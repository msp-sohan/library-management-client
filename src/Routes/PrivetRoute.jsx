import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../Provider/AuthProvider';

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen w-[100vw]">
				<RotatingLines
					strokeColor="grey"
					strokeWidth="5"
					animationDuration="0.75"
					width="96"
					visible={true}
				/>
			</div>
		);
	}

	if (user) {
		return children;
	}
	return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;
