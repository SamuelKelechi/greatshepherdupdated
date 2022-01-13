import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { FaSwatchbook } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { GoDashboard } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Global/GlobalContext";
import { app } from "../../Base";

const HeaderComponent = () => {
	const navigate = useNavigate();
	const { current, currentData, adminData } = useContext(GlobalContext);
	const [show, setShow] = useState(false);
	const handleShow = () => {
		setShow(!show);
	};

	return (
		<>
			<Container>
				<Logo>
					<FaSchool style={{ fontSize: "19px" }} />
					<span>School</span>
				</Logo>

				<Wrapper>
					<a>
						<Link to='/' style={{ color: "white", textDecoration: "none" }}>
							<AiFillHome style={{ fontSize: "19px" }} />
							<span>Home</span>
						</Link>
					</a>
					<a>
						<Link
							to='/about'
							style={{ color: "white", textDecoration: "none" }}>
							<FaSwatchbook style={{ fontSize: "19px" }} />
							<span>About</span>
						</Link>
					</a>
					<a>
						<Link
							to='/admission'
							style={{ color: "white", textDecoration: "none" }}>
							<MdSchool style={{ fontSize: "19px" }} />
							<span>Admission</span>
						</Link>
					</a>
					<a>
						<Link
							to='/contact'
							style={{ color: "white", textDecoration: "none" }}>
							<MdContacts style={{ fontSize: "19px" }} />
							<span>Contact</span>
						</Link>
					</a>
					{currentData ? (
						<Link
							to='/studentDashboard'
							style={{ color: "white", textDecoration: "none" }}>
							<GoDashboard style={{ fontSize: "19px" }} />
							<span>Dashboard</span>
						</Link>
					) : null}
					{adminData ? (
						<Link
							to='/adminDashboard'
							style={{ color: "white", textDecoration: "none" }}>
							<GoDashboard style={{ fontSize: "19px" }} />
							<span>Upload Result</span>
						</Link>
					) : null}

					{current ? (
						<button
							onClick={() => {
								app.auth().signOut();
								navigate("/");
							}}>
							Log out
						</button>
					) : (
						<Link
							to='/signup'
							style={{ color: "white", textDecoration: "none" }}>
							<button>Student Portal</button>
						</Link>
					)}
				</Wrapper>

				{show ? <Menu2 onClick={handleShow} /> : <Menu onClick={handleShow} />}
			</Container>

			{show ? (
				<>
					<MainSide>
						<button>Student Portal</button>
						<SubMenu
							onClick={() => {
								setShow(!show);
							}}>
							{/* <Logo>
								<FaSchool style={{ fontSize: "19px" }} />
								<span>School</span>
							</Logo> */}
							<a>
								<Link to='/' style={{ color: "white", textDecoration: "none" }}>
									<AiFillHome style={{ fontSize: "19px" }} />
									<span>Home</span>
								</Link>
							</a>

							<a>
								<Link
									to='/about'
									style={{ color: "white", textDecoration: "none" }}>
									<FaSwatchbook style={{ fontSize: "19px" }} />
									<span>About</span>
								</Link>
							</a>
							<a>
								<Link
									to='/admission'
									style={{ color: "white", textDecoration: "none" }}>
									<MdSchool style={{ fontSize: "19px" }} />
									<span>Admission</span>
								</Link>
							</a>

							<a>
								<Link
									to='/contact'
									style={{ color: "white", textDecoration: "none" }}>
									<MdContacts style={{ fontSize: "19px" }} />
									<span>Contact</span>
								</Link>
							</a>
							{currentData ? (
								<Link
									to='/studentDashboard'
									style={{ color: "white", textDecoration: "none" }}>
									<GoDashboard style={{ fontSize: "19px" }} />
									<span>Dashboard</span>
								</Link>
							) : null}
							{adminData ? (
								<Link
									to='/adminDashboard'
									style={{ color: "white", textDecoration: "none" }}>
									<GoDashboard style={{ fontSize: "19px" }} />
									<span>Upload Result</span>
								</Link>
							) : null}

							{current ? (
								<button
									onClick={() => {
										app.auth().signOut();
										navigate("/");
									}}>
									Log out
								</button>
							) : (
								<Link
									to='/signup'
									style={{ color: "white", textDecoration: "none" }}>
									<button>Student Portal</button>
								</Link>
							)}
						</SubMenu>
					</MainSide>
				</>
			) : null}
		</>
	);
};

export default HeaderComponent;

const MainSide = styled.div`
	width: 100%;
	background: rgba(0%, 0%, 0%, 0.5);
	z-index: 1;
	height: 100vh;
	position: fixed;
	top: 0;
`;

// const SubUser = styled.div`
// 	display: flex;
// 	height: 100px;
// 	justify-content: space-between;
// 	align-items: center;
// 	padding: 0px 30px;

// 	img {
// 		width: 50px;
// 		height: 50px;
// 		border-radius: 25px;
// 		object-fit: cover;
// 		border: 2px solid white;
// 	}

// 	span {
// 		font-size: 15px;
// 		font-weight: bold;
// 	}
// `;

const SubMenu = styled.div`
	display: none;
	z-index: 1000;

	button {
		margin-left: 20px;
		height: 35px;
		width: 120px;
		font-weight: bold;
		border-radius: 5px;
		border: none;
		// transform: scaleX(1);
		opacity: 1;
		cursor: pointer;
		font-size: 15px;
		margin-top: 30px;

		:hover {
			background-color: #1976d2;
			color: white;
			transform-origin: center left;
			transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
			// transform: scaleX(0.9);
			opacity: 0.8;
		}
	}

	@media screen and (max-width: 786px) {
		width: 250px;
		height: 100%;
		background-color: #00243a;
		/* float: right; */
		border-radius: 0 0 0px 10px;
		display: flex;
		flex-direction: column;
		padding-left: 20px;
		position: fixed;
		color: white;
		z-index: 1000;
		padding-top: 50px;
		padding-left: 50px;
		a {
			width: 100%;
			height: 40px;
			display: flex;
			align-items: center;
			margin-top: 30px;

			img {
				width: 30px;
				height: 30px;
				object-fit: 15px;
				opacity: 0.4;
				transition: all 350ms;
			}

			span {
				margin-left: 30px;
				text-transform: uppercase;
				font-weight: bold;
				color: rgba(249, 249, 249, 0.6);
			}

			&:hover {
				cursor: pointer;
				span {
					color: white;
				}
				img {
					opacity: 1;
				}
			}
		}
	}
`;

const Menu2 = styled(ImCancelCircle)`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		font-size: 30px;
		padding-right: 30px;
		cursor: pointer;
		color: white;
		z-index: 1000;
	}
`;
const Menu = styled(CgMenu)`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		font-size: 30px;
		margin-right: 30px;
		cursor: pointer;
		color: white;
	}
`;

const Container = styled.div`
	width: 100%;
	height: 70px;
	background-color: #00243a;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	z-index: 2;

	@media screen and (max-width: 768px) {
		display: flex;
		width: 100vw;
		justify-content: space-between;
	}
`;

const Logo = styled.div`
	width: 100px;
	height: 40px;
	object-fit: contain;
	cursor: pointer;
	margin-left: 30px;
	color: white;
	flex-direction: column;
	display: flex;
	align-items: center;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%; 
cursor: pointer;
/* margin-left: 20px; */
margin-right: 150px;
color : white;

button{
	margin-left: 20px;
	height: 35px;
	width: 120px;
	font-weight: bold;
	border-radius: 5px;
	border: none;
	// transform: scaleX(1);
	opacity: 1;
	cursor: pointer;
	font-size: 15px;

	:hover {
		background-color: #1976D2;
		color: white;
		transform-origin: center left;
		transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
		// transform: scaleX(0.9);
		opacity: 0.8;
	}
}

a{
  display: flex;
  align-items: center;
  height: 100%; 
  position: relative;
  margin-left: 30px;

  img{
    width: 20px;
    height: 20px;
    object-fit: cover;
    
  }

  span{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1.1px
    position: relative;
    opacity: 0.6;


    &:after{
      content:"";
      position: absolute;
      height: 2px;
      background-color: white;
      right: 0;
      left: 20px;
      bottom: 20px;
      opacity: 0;
      transform: scaleX(1);
      transform-origin: center left;
      transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
    }
  }

  &:hover{
    span{
      opacity: 1;
    }
    span:after {
      opacity: 1;
      transform: scaleX(1.06)
    }
  }
}

@media screen and (max-width: 768px){
  display: none;
}
`;

const UserAvatar = styled.div`
	width: 50px;
	height: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 15px;
	padding-right: 30px;
	cursor: pointer;

	img {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 25px;
	}

	span {
		font-size: 10px;
		font-weight: bold;
		opacity: 0;
		transition: all 350ms;
	}

	&:hover {
		span {
			opacity: 1;
		}
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
