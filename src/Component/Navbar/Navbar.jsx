import { Link, NavLink, useNavigate } from 'react-router-dom';
import userPic from '../../assets/user.png';
import logo from '../../assets/logo.png';
import { FaUserTie } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLogout } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const { user, logOut } = useAuth();
	const [theme, setTheme] = useState("light");
	const navigate = useNavigate();

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);


	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
		localStorage.theme = theme;
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const handleLogOut = () => {
		logOut()
			.then(() => {
				toast.success('Logout Successfully ');
				navigate('/login');
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const navlinks = (
		<>
			<NavLink to="/" className={({ isActive, isPending }) => isPending ? 'pending' : isActive
				? 'active hover:border-b-2 border-b-white  text-white text-lg md:text-xl mx-3 rounded-none font-semibold border-b-2'
				: 'hover:border-b-2 border-b-white  text-black dark:text-indigo-400 text-lg md:text-xl mx-3 rounded-none'}>
				Home
			</NavLink>
			<NavLink to="/addBook" className={({ isActive, isPending }) => isPending ? 'pending' : isActive
				? 'active hover:border-b-2 border-b-white  text-white text-lg md:text-xl  mx-3 rounded-none font-semibold border-b-2'
				: 'hover:border-b-2 border-b-white  text-black dark:text-indigo-400 text-lg md:text-xl  mx-3 rounded-none'}>
				Add Book
			</NavLink>
			<NavLink to="/AllBooks" className={({ isActive, isPending }) => isPending ? 'pending' : isActive
				? 'active hover:border-b-2 border-b-white  text-white text-lg md:text-xl mx-3  rounded-none font-semibold border-b-2'
				: 'hover:border-b-2 border-b-white  text-black dark:text-indigo-400 text-lg md:text-xl mx-3 rounded-none '}>
				All Books
			</NavLink>
			<NavLink to="/borrowedBooks" className={({ isActive, isPending }) => isPending ? 'pending' : isActive
				? 'active hover:border-b-2 border-b-white  text-white text-lg md:text-xl mx-3  rounded-none font-semibold border-b-2'
				: 'hover:border-b-2 border-b-white  text-black dark:text-indigo-400 text-lg md:text-xl mx-3 rounded-none '}>
				Borrowed Books
			</NavLink>
		</>
	);
	return (
		<div className="lg:absolute left-0 right-0 z-50">
			<div className="flex py-3 justify-between items-center bg-indigo-500 dark:bg-gray-800 dark:bg-opacity-50 container mx-auto lg:bg-opacity-60">
				{/* Navbar Start */}
				<div className="lg:hidden z-50">
					<div className="dropdown ">
						<label tabIndex={0} className="btn btn-ghost btn-circle bg-gray-100 ml-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
							</svg>
						</label>
						<ul tabIndex={0} className="menu menu-sm space-y-3 dropdown-content mt-3 z-[1] p-2 shadow bg-indigo-500 rounded-box w-52">
							{navlinks}
						</ul>
					</div>
				</div>

				{/* Navbar Center */}
				<div className="md:pl-24 lg:pl-0">
					<Link to="/"><img src={logo} alt="" className='w-36 lg:w-44 ml-2' /></Link>
				</div>

				{/* Navbar End */}
				<div className="">
					<ul className="hidden lg:flex">{navlinks}</ul>
				</div>

				{/* User Information */}
				<div className='flex'>
					<div className="flex justify-center items-center mr-5">
						<button className="bg-gray-200 p-2 dark:bg-gray-600 btn btn-circle rounded-3xl" onClick={handleThemeSwitch}>
							<MdDarkMode className="text-2xl dark:text-white"></MdDarkMode>
						</button>
					</div>
					<div className="dropdown">
						<label tabIndex={0} className="">
							<div className="">
								{user?.email ? (
									<button className="btn-circle mr-2">
										<img src={user?.photoURL ? user.photoURL : userPic} className="right-0 btn-circle"></img>
									</button>
								) : (
									<Link to="/login" className="hover:border-b-2 border-b-red-500 hover:btn-ghost hover:text-white hover:font-medium  text-black text-lg md:text-xl mx-3 rounded-xl capitalize font-serif bg-gray-50 p-2">
										Login
									</Link>
								)}
							</div>
						</label>
						{user && (
							<ul tabIndex={0} className="menu absolute right-0 text-left menu-sm text-black space-y-3 dropdown-content mt-3 z-50 p-2 shadow bg-slate-200 rounded-box w-48">
								<h2 className="text-lg flex items-center gap-4">
									<FaUserTie></FaUserTie> {user?.displayName ? user?.displayName : user?.email}
								</h2>
								<hr className="border border-black w-full" />
								<button onClick={handleLogOut} className="text-lg flex items-center gap-4 btn-ghost rounded-[10px] px-2">
									<MdOutlineLogout></MdOutlineLogout> Log Out
								</button>
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
