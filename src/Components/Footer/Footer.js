import React, { Fragment } from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
// import pic from "../../img/ud1.png";
import { Link } from "react-router-dom";

let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
	return (
		<Fragment>
			<Container>
				<Wrapper>
					<ContentWrapper>
						<ContentText1>Home</ContentText1>

						<Direct1>How it Work</Direct1>
						<Direct2>Testimonia</Direct2>
						<Direct3>Career</Direct3>
						<Direct4>Investor</Direct4>
					</ContentWrapper>
					<ContentWrapper>
						<ContentText1>About Us</ContentText1>

						<Direct1>How it Work</Direct1>
						<Direct2>Testimonia</Direct2>
						<Direct3>Career</Direct3>
						<Direct4>Investor</Direct4>
					</ContentWrapper>
					<ContentWrapper>
						<ContentText1>Admission</ContentText1>

						<Direct1>How it Work</Direct1>
						<Direct2>Testimonia</Direct2>
						<Direct3>Career</Direct3>
						<Direct4>Investor</Direct4>
					</ContentWrapper>
					<ContentWrapper>
						<ContentText1>Contact</ContentText1>

						<Direct1>How it Work</Direct1>
						<Direct2>Testimonia</Direct2>
						<Direct3>Career</Direct3>
						<Direct4>Investor</Direct4>
					</ContentWrapper>
				</Wrapper>
			</Container>
			<BottomTab>
				<Tab>
					<span>Developed by <a href="https://samuel-kelechi.web.app/" target="blank" style={{textDecoration:"none", color:"white"}}>CodeLab</a> 🚀 | © {date} All rights reserved</span>
				</Tab>
			</BottomTab>
		</Fragment>
	);
};

export default Footer;
const Direct1 = styled.div`
	margin-top: 20px;
	text-align: left;
	/* width: 10rem; */
	font-weight: normal;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
const Direct2 = styled.div`
	text-align: left;
	/* width: 10rem; */
	margin-top: 10px;
	font-weight: normal;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
const Direct3 = styled.div`
	text-align: left;
	/* width: 10rem; */
	margin-top: 10px;
	font-weight: normal;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
const Direct4 = styled.div`
	text-align: left;
	/* width: 10rem; */
	margin-top: 10px;
	font-weight: normal;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
const Direct5 = styled.div`
	text-align: left;
	/* width: 10rem; */
	margin-top: 10px;
	font-weight: normal;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

const ContentWrapper = styled.div`
	margin: 10px;
`;
const ContentWrapperm = styled.div`
	margin-left: 70px;

	@media screen and (max-width: 600px) {
		/* margin-left: 17px; */
	}
`;
const ContentText1 = styled.div`
	font-weight: bold;
`;
const ContentText2 = styled.div`
	font-weight: 300;
	@media screen and (max-width: 600px) {
		font-size: 10px;
		width: ;
	}
`;

const Container = styled.div`
	/* height: 300px; */
	width: 100%;
	margin-top: 20px;
	background: #00243a;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	display: grid;
	/* margin: 10px; */
	grid-template-columns: repeat(4, minmax(0, 1fr));
	width: 80%;
	justify-content: center;
	margin-left: 150px;
	margin-top: 50px;
	/* background-color: red; */
	/* align-items: center; */
	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		/* margin: 0; */
		width: 100%;
		/* background: red; */
		padding-top: 10px;
		padding-bottom: 20px;
		margin-left: 10px;
	
	}
`;

const Tab = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 40px;
`;

const BottomTab = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	background-color: #00243a;
	color: silver;
	align-items: center;
	@media screen and (max-width: 600px) {
		font-size: 10px;
	}
	/* padding: 0 15px; */
`;
const SocialLinks = styled.div`
	font-size: 35px;
	height: 100%;
	display: flex;
	align-items: center;
	width: 170px;
	justify-content: space-between;
	/* background-color: red; */
	a {
		color: white;
	}
	@media screen and (max-width: 600px) {
		font-size: 10px;
		width: 70px;
	}
`;
const Logo = styled.img`
	width: 150px;
	height: 40px;
	object-fit: contain;
`;
