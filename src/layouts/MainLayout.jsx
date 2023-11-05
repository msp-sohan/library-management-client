import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../Component/Footer/Footer';

const MainLayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Toaster></Toaster>
			<Footer></Footer>
		</div>
	);
};

export default MainLayout;
