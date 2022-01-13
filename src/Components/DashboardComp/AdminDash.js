import React, { useState } from "react";
import styled from "styled-components";
import { app } from "../../Base";
import firebase from "firebase";
import { BsSearch } from "react-icons/bs";
import pic from "./img/8.jpg";
import { Document, Page } from "react-pdf";
const AdminDash = () => {
	const [studentData, setStudentData] = React.useState([]);
	const [image, setImage] = useState("");
	const [avatar, setAvatar] = useState("");
	const [selectStud, setSelectStud] = React.useState("");
	const [semesterVal, setSemesterVal] = React.useState("first");
	const [level, setLevel] = React.useState("100");

	const [percentage, setPercentage] = useState(0);

	const onUploadImage = async (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);

		const fileRef = await app.storage().ref();
		const storageRef = fileRef.child("users/" + file.name).put(file);

		storageRef.on(
			firebase.storage.TaskEvent.STATE_CHANGED,
			(snapshot) => {
				const counter = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setPercentage(counter);
				console.log(counter);
			},
			(err) => console.log(err.message),
			() => {
				storageRef.snapshot.ref.getDownloadURL().then((URL) => {
					console.log(URL);
					setAvatar(URL);
				});
			},
		);
	};

	const uploadResult = async () => {
		await app.firestore().collection("results").doc().set({
			avatar,
			selectStud,
			semesterVal,
			level,
		});

		setLevel("");
		setSelectStud("");
		setSemesterVal("");
		setImage("");
	};

	const getData = async () => {
		await app
			.firestore()
			.collection("students")
			.onSnapshot((snapShot) => {
				const r = [];
				snapShot.forEach((doc) => {
					r.push(doc.data());
				});
				setStudentData(r);
			});
	};

	React.useEffect(() => {
		getData();
		console.log("dfghjxfhjghjn", studentData);
	}, []);

	return (
		<Container>
			<SchoolLogoHold>
				<Logo>School Logo</Logo>
			</SchoolLogoHold>
			<br />
			<br />

			<CardHold>
				<Card>
					<h2>GREAT SHEPHERED OFFICIAL PORTAL</h2>
					<p>
						Here is your school Secret ID : <span>thgbfisifhhghs</span>
					</p>
					<br />
					<h3>Upload student result Here</h3>
					<ImageInput
						placeholder='image'
						type='file'
						id='pix'
						onChange={onUploadImage}
					/>
					<ImageLabel htmlFor='pix'>
						Upload Result File{" "}
						<span>
							<BsSearch />
						</span>
					</ImageLabel>

					<MainHold>
						<h4>Student name</h4>
						<select
							onChange={(e) => {
								setSelectStud(e.target.value);
							}}>
							<option disabled selected value='sele'>
								Select a Student
							</option>
							{studentData?.map((props) => (
								<option selected={props.fullName}> {props.fullName}</option>
							))}
						</select>
					</MainHold>
					<MainHold>
						<h4>Select Level</h4>
						<select
							onChange={(e) => {
								setLevel(e.target.value);
							}}>
							<option disabled selected value='sele'>
								Select your option
							</option>
							<option value='100'>100 Level</option>
							<option value='200'>200 Level</option>
							<option value='300'>300 Level</option>
						</select>
					</MainHold>
					<MainHold>
						<h4>Select Semester Result</h4>
						<select
							value={semesterVal}
							onChange={(e) => {
								setSemesterVal(e.target.value);
							}}>
							<option value='sele'>Select your option</option>
							<option value='first'>1st Semester Result</option>
							<option value='second'>2nd Semester Result</option>
						</select>
					</MainHold>
					<button onClick={uploadResult}>Submit Data</button>
				</Card>
				<Card2>
					<h2>Image preview</h2>{" "}
					{image ? (
						<PreViewImg frameborder='0' scrolling='auto' src={image} />
					) : (
						<div>
							<Imagign src={pic} />
						</div>
					)}
				</Card2>
			</CardHold>
		</Container>
	);
};

export default AdminDash;

const Imagign = styled.img`
	height: 400px;
	width: 100%;
	background: white;


	h2
`;

const Card2 = styled.div`
	transition: 0.5s all ease;
	padding-bottom: 20px;

	width: 500px;
	background-color: rgba(255, 255, 255, 0.25);
	/* box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit; */
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	/* For the fog-like glass effect */
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(6px);

	border-radius: 10px;
	display: flex;
	justify-content: center;
	padding: 10px;
	flex-direction: column;
	color: white;
	margin-left: 20px;

	@media screen and (max-width: 760px) {
		width: 320px;
		margin-top: 10px;
	}
`;
const Card = styled.div`
	transition: 0.5s all ease;
	padding-bottom: 20px;

	width: 500px;
	background-color: rgba(255, 255, 255, 0.25);
	/* box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit; */
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	/* For the fog-like glass effect */
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(6px);

	border-radius: 10px;
	display: flex;
	justify-content: center;
	padding-left: 30px;
	flex-direction: column;
	color: white;
	margin-left: 20px;
	@media screen and (max-width: 760px) {
		width: 320px;
	}
	h2 {
		margin-top: 30px;
	}

	p {
		font-size: 20px;
		color: white;
		font-weight: bold;
	}

	h3 {
		font-weight: lighter;
	}

	span {
		color: black;
	}
`;
const CardHold = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media screen and (max-width: 760px) {
		justify-content: center;
		align-items: center;
		margin-right: 20px;
	}
`;

const SchoolLogoHold = styled.div`
	transition: 0.5s all ease;
	height: 300px;
	width: 500px;
	background-color: rgba(255, 255, 255, 0.25);
	/* box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit; */
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	/* For the fog-like glass effect */
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 760px) {
		width: 300px;
		height: 250px;
		margin-top: 10px;
	}
`;

const Logo = styled.div`
	color: white;
`;

const ImageInput = styled.input`
	display: none;
`;

const ImageLabel = styled.label`
	padding: 20px 30px;
	background-color: #00243a;
	color: white;
	border-radius: 30px;
	transition: all 350ms;
	transform: scale(1);
	width: 350px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;

	@media screen and (max-width: 760px) {
		width: 250px;
	}

	:hover {
		transform: scale(0.97);
		cursor: pointer;
	}

	span {
		color: white;
		margin-top: 5px;
	}
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 1px solid black;
	margin: 10px 0;
	object-fit: cover;
`;

const MainHold = styled.div`
	width: 400px;
	display: flex;

	flex-direction: column;

	@media screen and (max-width: 760px) {
		width: 90%;
	}
`;

const PreViewImg = styled.iframe`
	height: 500px;

	object-fit: cover;
	margin-top: 10px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 760px) {
		width: 90%;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	background: #00243a;
	height: 100vh;
	padding-bottom: 30px;

	select {
		width: 400px;
		height: 50px;
		font-size: 18px;
		padding-left: 10px;
	}
	button {
		width: 350px;
		height: 50px;
		margin-top: 30px;
		background: #00243a;
		color: white;
		font-weight: bold;
		cursor: pointer;
	}

	@media screen and (max-width: 760px) {
		height: 100%;
		select {
			width: 300px;
		}

		button {
			width: 200px;
		}
	}
`;
