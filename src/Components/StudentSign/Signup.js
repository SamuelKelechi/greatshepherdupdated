import React, { useState } from "react";
import Styled from "styled-components";
import Pic from "./Image/pix.png";
import Pic2 from "./Image/stu.png";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { app } from "../../Base";
import firebase from "firebase";
import { FaUserCircle } from "react-icons/fa";

function Signup() {
	const [toggle, setToggle] = useState(true);

	const ontouch = () => {
		setToggle(!toggle);
	};

	const navigate = useNavigate();
	const [show, setShow] = React.useState(false);
	const [sec, setSect] = React.useState("1eMinCv9skdifv68iEv2");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [image, setImage] = React.useState(Pic2);
	const [avatar, setAvatar] = React.useState("");
	const [percent, setPercent] = React.useState(0.0000001);
	const [errMess, setErrMess] = React.useState("");

	const schema = yup.object().shape({
		fullName: yup.string().required("this field is required"),
		gender: yup.string().required("this field is required"),
		regnumber: yup.number().required("this field is required"),
		secretId: yup.string().required("this field is required"),
		email: yup.string().email().required("this field is required"),
		password: yup.string().required("this field is required"),
	});

	const onUploadImage = async (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);

		const fileRef = await app.storage().ref();
		const storageRef = fileRef.child("avatar/" + file.name).put(file);

		storageRef.on(
			firebase.storage.TaskEvent.STATE_CHANGED,
			(snapShot) => {
				const counter = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;

				setPercent(counter);
				console.log(counter);
			},
			(err) => console.log(err.message),
			() => {
				storageRef.snapshot.ref.getDownloadURL().then((URL) => {
					setAvatar(URL);
					console.log(URL);
				});
			},
		);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const uploadToFirebase = handleSubmit(async (val) => {
		const { fullName, email, password, secretId, gender, regnumber } = val;
		if (secretId !== sec) {
			setErrMess("incorrect school id");
		} else {
			const newUser = await app
				.auth()
				.createUserWithEmailAndPassword(email, password);

			if (newUser) {
				await app.firestore().collection("students").doc(newUser.user.uid).set({
					fullName,
					email,
					secretId,
					gender,
					password,
					regnumber,
					avatar,
					createdBy: newUser.user.uid,
				});
				navigate("/studentDashboard");
				reset();
			}
		}
	});

	const LoginUser = async () => {
		await app.auth().signInWithEmailAndPassword(email, password);
		navigate("/studentDashboard");
	};

	const handleShow = () => {
		setShow(!show);
	};

	return (
		<>
			<br />
			<br />
			<br />

			<MainConatiner>
				{toggle ? (
					<Wrapper1>
						<LeftContain1>
							<Pix src={Pic} />
							<h2>Student Portal</h2>
							<p>
								Get access to your result from here, Enter your student id to
								let us know you're a student. Don't have an id? see the school
								admin to get an id for yourself
							</p>
						</LeftContain1>
						<RightContain1>
							<PrevImage src={image} />
							<input
								onChange={onUploadImage}
								id='pix'
								type='file'
								style={{ height: "30px", border: "none", display: "none" }}
								placeholder='Choose an image'
							/>
							<InputLabel htmlFor='pix'>Upload an Image</InputLabel>
							<input {...register("fullName")} placeholder='Full name' />
							<select {...register("gender")}>
								<option disabled selected value='sele'>
									Select your Gender
								</option>
								<option value='male'>Male</option>
								<option value='female'>female</option>
							</select>
							<input {...register("email")} placeholder='Email address' />
							<input {...register("regnumber")} placeholder='Reg.Number' />

							<input
								{...register("password")}
								placeholder='Enter your password'
							/>
							<input
								{...register("secretId")}
								placeholder='Enter your school ID'
							/>
							{errMess ? (
								<p style={{ color: "red", backgroun: "black" }}>{errMess}</p>
							) : null}

							<span style={{ color: "red" }}>{errors.secretId?.message}</span>
							<button onClick={uploadToFirebase}>Submit</button>
							<p style={{ display: "flex" }}>
								Already have an account? Login in
								<div
									style={{
										marginLeft: "5px",
										color: "red",
										cursor: "pointer",
										fontWeight: "bold",
									}}
									onClick={ontouch}>
									here
								</div>
							</p>
						</RightContain1>
					</Wrapper1>
				) : (
					<Wrapper2>
						<LeftContain1>
							<Pix src={Pic} />
							<h2>Student Portal</h2>
							<p>
								Get access to your result from here, Enter your student id to
								let us know you're a student. Don't have an id? see the school
								admin to get an id for yourself
							</p>
						</LeftContain1>
						<RightContainShort>
							<input
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								placeholder='Email address'
							/>
							<input
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								placeholder='Enter your password'
							/>
							<button
								onClick={() => {
									LoginUser();
								}}>
								Login
							</button>
							<p style={{ display: "flex" }}>
								Don't have an account? Sign up
								<div
									style={{
										marginLeft: "5px",
										color: "red",
										cursor: "pointer",
										fontWeight: "bold",
									}}
									onClick={ontouch}>
									here
								</div>
							</p>
						</RightContainShort>
					</Wrapper2>
				)}
			</MainConatiner>
		</>
	);
}

export default Signup;

const PrevImage = Styled.img`
height :100px;
width : 100px;
border-radius : 50%;
background : silver;
object-fit:cover
`;

const InputLabel = Styled.label`
color : white;
padding : 20px 40px;
background : #00243A;
border-radius : 30px;
transition : all 350ms;
cursor : pointer;

:hover{
	transform : scale(0.9)
}

`;

const MainConatiner = Styled.div`
    background-color: #00243A;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    height : 100%
`;

const Wrapper1 = Styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    margin-bottom: 80px;
    justify-content: center;


    @media screen and (max-width: 430px){
        width: 97%;
    }
`;

const LeftContain1 = Styled.div`
    height: 550px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // font-weight: bold;

    h2{
        font-size: 40px;
    }

    p{
        margin-top: -15px;
    }

  @media screen and (max-width : 600px){
      display : none
  }

`;

const Pix = Styled.img`
    width: 95%;
`;

const RightContain1 = Styled.div`
    width: 400px;
  
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 150px;
    border: none;
    justify-content: center;

    input{
        width: 90%;
        margin: 10px;
        height: 40px;
        padding-left: 10px;
        border-radius: 8px;
        border: none;
        border: 1px solid lightgrey;
        font-size: 17px;
        color: black;
        outline: none;
    }
    select{
        width: 93%;
        margin: 10px;
        height: 40px;
        padding-left: 10px;
        border-radius: 8px;
        border: none;
        border: 1px solid lightgrey;
        font-size: 17px;
        color: black;
        outline: none;
    }

    button{
        height: 50px;
        width: 250px;
        border: none;
        border-radius: 10px;
        background-color: #00243A;
        color: white;
        margin-top: 20px;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;

        :hover{
            background-color:#132A38;
        }
    }

    p{
        color: black;
        font-size: 18px;
    }

    @media screen and (max-width: 980px){
        margin-left: 0;
    }

    @media screen and (max-width: 430px){
        width: 95%;
        margin-top: -40px;

        button{
            height: 50px;
            
            font-size: 18px;
        }

        input{
            height: 50px;
        }
    }

`;

const Wrapper2 = Styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 100px;
margin-bottom: 80px;
justify-content: center;

@media screen and (max-width: 430px){
    margin-top: 10px;
    margin-bottom: 20px;
    width: 95%;
}
`;

const RightContainShort = Styled.div`
width: 400px;
height: 400px;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 150px;
border: none;
justify-content: center;
margin-top: 80px;

input{
    width: 90%;
    margin: 10px;
    height: 40px;
    padding-left: 10px;
    border-radius: 8px;
    border: none;
    border: 1px solid lightgrey;
    font-size: 17px;
    color: black;
    outline: none;
}

button{
    height: 50px;
    width: 250px;
    border: none;
    border-radius: 10px;
    background-color: #00243A;
    color: white;
    margin-top: 20px;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;

    :hover{
        background-color:#132A38;
    }
}

p{
    color: black;
    font-size: 18px;
}

@media screen and (max-width: 980px){
    margin-left: 0;
}

@media screen and (max-width: 430px){
    width: 95%;
    margin-top: 0;

 

    input{
      
    }
}


`;
