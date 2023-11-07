import { Navigate, useLocation } from 'react-router-dom';
// import { RotatingLines } from 'react-loader-spinner';

import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import LoaderSpinner from '../Component/LoaderSpinner/LoaderSpinner';

const PrivetRoute = ({ children }) => {
	const { user, loading } = useAuth()
	const location = useLocation();

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen w-[100vw]">
				<LoaderSpinner></LoaderSpinner>
				{/* <RotatingLines
					strokeColor="grey"
					strokeWidth="5"
					animationDuration="0.75"
					width="96"
					visible={true} /> */}
			</div>
		);
	}

	if (user) {
		return children;
	}
	return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivetRoute.propTypes = {
	children: PropTypes.node
};

export default PrivetRoute;