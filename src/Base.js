import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

export const app = firebase.initializeApp({
	apiKey: "AIzaSyAoe9C1In7MFPZUfgdM1pmonb6b_mC_Z30",
	authDomain: "bootcampcicd.firebaseapp.com",
	projectId: "bootcampcicd",
	storageBucket: "bootcampcicd.appspot.com",
	messagingSenderId: "85426622224",
	appId: "1:85426622224:web:1a0252a770a187a5329f95",
});
