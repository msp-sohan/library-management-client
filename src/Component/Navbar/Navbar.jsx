import { Link, NavLink, useNavigate } from 'react-router-dom';
import userPic from '../../assets/user.png';
import logo from '../../assets/logo.png';
import { FaUserTie } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
	const { user, logOut } = useAuth();
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut()
			.then(() => {
				toast.success('Successfully Logout');
				navigate('/login');
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const navlinks = (
		<>
			<NavLink
				to="/"
				className={({ isActive, isPending }) =>
					isPending
						? 'pending'
						: isActive
						? 'active hover:border-b-2 border-b-white  text-white text-lg md:text-xl mx-3 rounded-none font-semibold border-b-2'
						: 'hover:border-b-2 border-b-white  text-black text-lg md:text-xl mx-3 rounded-none '
				}>
				Home
			</NavLink>
			<NavLink
				to="/login"
				className={({ isActive, isPending }) =>
					isPending
						? 'pending'
						: isActive
						? 'active hover:border-b-2 border-b-white  text-white text-lg md:text-xl  mx-3 rounded-none font-semibold border-b-2'
						: 'hover:border-b-2 border-b-white  text-black text-lg md:text-xl  mx-3 rounded-none'
				}>
				Add Product
			</NavLink>
			<NavLink
				to="/register"
				className={({ isActive, isPending }) =>
					isPending
						? 'pending'
						: isActive
						? 'active hover:border-b-2 border-b-white  text-white text-lg md:text-xl mx-3  rounded-none font-semibold border-b-2'
						: 'hover:border-b-2 border-b-white  text-black text-lg md:text-xl mx-3 rounded-none '
				}>
				My Cart
			</NavLink>
		</>
	);
	return (
		<div>
			<div className="navbar bg-indigo-500 container mx-auto ">
				<div className="navbar-start md:hidden">
					<div className="dropdown ">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm space-y-3 dropdown-content mt-3 z-[1] p-2 shadow bg-indigo-500 rounded-box w-52">
							{navlinks}
						</ul>
					</div>
				</div>
				<div className="sm:navbar-center md:navbar-start">
					<img src={logo} alt="" />
				</div>
				<div className="navbar-end md:navbar-start">
					<ul className="hidden md:flex gap-6">{navlinks}</ul>
				</div>
				<div className="dropdown ">
					<label tabIndex={0} className="">
						<div className="">
							{user?.email ? (
								<button className="btn-circle">
									<img
										className="right-0 btn-circle"
										src={
											user?.photoURL ? user.photoURL : userPic
										}></img>
								</button>
							) : (
								<Link
									to="/login"
									className="hover:border-b-2 border-b-red-500 hover:btn-ghost hover:text-white hover:font-medium  text-black text-lg md:text-xl mx-3 rounded-xl capitalize font-serif bg-gray-50 p-2">
									Login
								</Link>
							)}
						</div>
					</label>
					{user && (
						<ul
							tabIndex={0}
							className="menu absolute right-0 text-left menu-sm text-black space-y-3 dropdown-content mt-3 z-1 p-2 shadow bg-slate-200 rounded-box w-48">
							<h2 className="text-lg flex items-center gap-4">
								<FaUserTie></FaUserTie>
								{user?.displayName ? user?.displayName : user?.email}
							</h2>
							<hr className="border border-black w-full" />
							<button
								onClick={handleLogOut}
								className="text-lg flex items-center gap-4 btn-ghost rounded-[10px] px-2">
								<MdOutlineLogout></MdOutlineLogout>Log Out
							</button>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
