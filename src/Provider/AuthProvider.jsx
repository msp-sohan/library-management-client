import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../config/firebase.config';
import useAxios from '../hooks/useAxios';
// import axios from 'axios';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const axios = useAxios()

	const googleLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const profileUpdate = (name, image) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: image,
		});
	};

	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			const loggedEmail = currentUser?.email || user?.email;
			const userEmail = { email: loggedEmail };

			setUser(currentUser);
			setLoading(false);

			if (currentUser) {
				axios.post('/login', userEmail)
			} else {
				axios.post('/logout', userEmail)
			}
		});
		return () => {
			unSubscribe();
		};
	}, [axios, user?.email]);



	const authInfo = {
		user,
		loading,
		googleLogin,
		createUser,
		signInUser,
		logOut,
		profileUpdate,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
