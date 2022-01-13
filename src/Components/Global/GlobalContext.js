import React, { createContext, useEffect } from "react";
import { app } from "../../Base";

export const GlobalContext = createContext();
const db = app.firestore().collection("students");
const dbs = app.firestore().collection("admin");
export const GlobalProvider = ({ children }) => {
	const [current, setCurrent] = React.useState(null);
	const [currentData, setCurrentData] = React.useState(null);
	const [adminData, setAdminData] = React.useState(null);

	useEffect(() => {
		app.auth().onAuthStateChanged((user) => {
			setCurrent(user);

			db.doc(user.uid)
				.get()
				.then((doc) => {
					setCurrentData(doc.data());
				});
			dbs
				.doc(user.uid)
				.get()
				.then((doc) => {
					setAdminData(doc.data());
				});
		});

		console.log(currentData);
	}, []);

	return (
		<GlobalContext.Provider value={{ current, currentData, adminData }}>
			{children}
		</GlobalContext.Provider>
	);
};
