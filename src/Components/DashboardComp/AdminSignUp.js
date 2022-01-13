import React, { useState } from "react";
import Styled from "styled-components";
// import Pic from "./Image/pix.png";
import Pic from "../StudentSign/Image/pix.png";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { app } from "../../Base";
import firebase from "firebase";
import { FaUserCircle } from "react-icons/fa";

function AdminSignUp() {
	const [toggle, setToggle] = useState(true);

	const ontouch = () => {
		setToggle(!toggle);
	};

	const navigate = useNavigate();
	const [show, setShow] = React.useState(false);
	const [sec, setSect] = React.useState("1eMinCv9skdifv68iEv2");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const [errMess, setErrMess] = React.useState("");

	const schema = yup.object().shape({
		fullName: yup.string().required("this field is required"),

		email: yup.string().email().required("this field is required"),
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

	const uploadToFirebase = handleSubmit(async (val) => {
		const { fullName, email, password } = val;

		const newUser = await app
			.auth()
			.createUserWithEmailAndPassword(email, password);

		if (newUser) {
			await app.firestore().collection("admin").doc(newUser.user.uid).set({
				fullName,
				email,

				password,

				createdBy: newUser.user.uid,
			});
			navigate("/adminDashboard");
			reset();
		}
	});

	const LoginUser = async () => {
		await app.auth().signInWithEmailAndPassword(email, password);
		navigate("/adminDashboard");
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
						<h3>Admin Page</h3>
						<RightContain1>
							<input {...register("fullName")} placeholder='Full name' />

							<input {...register("email")} placeholder='Email address' />

							<input
								{...register("password")}
								placeholder='Enter your password'
							/>

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

export default AdminSignUp;

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
    /* margin-top: 100px; */
    margin-bottom: 80px;
    justify-content: center;
	flex-direction: column;
	align-items: center;


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
     height : 450px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
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
/* margin-top: 100px; */
margin-bottom: 80px;
justify-content: center;
align-items: center;
flex-direction: column;

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
