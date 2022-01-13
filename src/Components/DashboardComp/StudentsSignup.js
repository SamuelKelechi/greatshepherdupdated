import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { app } from "../../Base";
import { useNavigate } from "react-router-dom";
const StudentsSignup = () => {
	const navigate = useNavigate();
	const [fetchData, setFetchData] = React.useState([]);
	const [errMess, setErrMess] = React.useState("");
	const [sec, setSect] = React.useState("thgbfisifhhghs");

	const schema = yup.object().shape({
		userName: yup.string().required("this field is required"),
		email: yup.string().email().required("this field is required"),
		secretId: yup.string().required("this field is required"),
		password: yup.string().required("this field is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	// const getData = async () => {
	// 	await app
	// 		.firestore()
	// 		.collection("users")
	// 		.onSnapshot((snapShot) => {
	// 			const r = [];
	// 			snapShot.forEach((doc) => {
	// 				r.push({ ...doc.data(), id: doc.id });
	// 			});
	// 			setFetchData(r);
	// 		});
	// };

	const RegisterUser = handleSubmit(async (val) => {
		const { userName, email, password, secretId } = val;

		if (secretId !== sec) {
			setErrMess("wrong school id");
		} else {
			const newUser = await app
				.auth()
				.createUserWithEmailAndPassword(email, password);

			if (newUser) {
				await app.firestore().collection("students").doc(newUser.user.uid).set({
					userName,
					email,

					password,
					createdBy: newUser.user.uid,
				});
				navigate("/studentDashboard");
				console.log(val);
				reset();
			}
		}
	});

	// React.useEffect(() => {
	// 	getData();
	// 	console.log("fghcj", fetchData[0].secret);
	// }, []);

	// const onSubmit = (data) => console.log(data);

	return (
		<Container onSubmit={RegisterUser}>
			<br />
			<br />
			<br />
			<br />
			<input {...register("userName")} placeholder='enter your fullname' />
			<input {...register("email")} placeholder='enter your email' />
			<input {...register("secretId")} placeholder='enter your school id' />
			{errMess ? <p style={{ color: "red" }}>{errMess}</p> : null}
			<input {...register("password")} placeholder='enter your password' />
			<span>{errors.secretId?.message}</span>
			<button type='submit'>Sign up</button>
		</Container>
	);
};

export default StudentsSignup;
const Container = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	input {
		width: 400px;
		height: 40px;
		margin: 10px;
	}

	button {
		width: 400px;
		height: 40px;
		margin: 10px;
	}
`;
