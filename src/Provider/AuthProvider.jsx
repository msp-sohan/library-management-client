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
// import axios from 'axios';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

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
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);


	// useEffect(() => {
	// 	const unsubscribe = onAuthStateChanged(auth, currentUser => {
	// 		const userEmail = currentUser?.email || user?.email;
	// 		const loggedUser = { email: userEmail };
	// 		setUser(currentUser);
	// 		console.log('Current User', currentUser);
	// 		setLoading(false);
	// 		// if user exists then issue a token
	// 		if (currentUser) {
	// 			axios.post('http://localhost:5000/login', loggedUser, { withCredentials: true })
	// 				.then(res => {
	// 					console.log('token response', res.data);
	// 				})
	// 		}
	// 		else {
	// 			axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
	// 				.then(res => {
	// 					console.log(res.data);
	// 				})
	// 		}
	// 	});
	// 	return () => {
	// 		return unsubscribe();
	// 	}
	// }, [user?.email])

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
