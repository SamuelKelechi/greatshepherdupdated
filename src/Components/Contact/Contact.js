import React from "react";
import styled from "styled-components";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import BusinessIcon from "@mui/icons-material/Business";
import Pics from "./3.png";

const Contact = () => {
	return (
		<Container>
			<Wrapper>
				<TextHolder>
					<IconHolder>
						<PermContactCalendarIcon style={{ fontSize: "40px" }} />
					</IconHolder>
					<ContactDiv>Contact Us</ContactDiv>
					<Space2 />
					<OtherText>
						Help us Know your thought, contact <br />
						us for better clarification
					</OtherText>
				</TextHolder>
				<CardHolder>
					<ImageCard>
						<Text2>Send Us an Email</Text2>
						<Space />
						<Image src={Pics} />
					</ImageCard>
					<FormCard>
						<Input placeholder='Name' />
						<Input placeholder='Email address' />
						<Input placeholder='phone No' />
						<MessageInput placeholder='Your message' />
						<ButtonHolder>
							<ButtonS>Submit</ButtonS>
						</ButtonHolder>
					</FormCard>
				</CardHolder>
				<AddressHolder>
					<Icon2></Icon2>
					<Email>Email: esepgsadmissions@gmail.com</Email>
					<PhoneNumber>Phone Number:+22964251703 +2347062944349 </PhoneNumber>
					<MapDiv>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.149164034653!2d2.6246083141499477!3d6.502793825209307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b5a02450e9ef9%3A0xae02282713c1682a!2sLong%20Rail%20Kandevi%C3%A9%2C%20Porto-Novo%2C%20Benin!5e0!3m2!1sen!2sng!4v1641570049675!5m2!1sen!2sng'
							//   width="600"
							//   height="450"
							//   style={{border:0,
							//        allowfullscreen:"",
							//         loading:"lazy"}}
						></iframe>
					</MapDiv>
				</AddressHolder>
			</Wrapper>
		</Container>
	);
};

export default Contact;

const MapDiv = styled.div`
	margin-top: 20px;
	height: 400px;
	width: 90%;
	iframe {
		height: 400px;
		width: 90%;
		border: none;
	}

	@media screen and (max-width: 600px) {
		width: 100%;

		iframe {
			width: 100%;
		}
	}
`;
const PhoneNumber = styled.div`
	color: black;
`;

const Email = styled.div`
	color: black;
`;

const Icon2 = styled(BusinessIcon)`
	color: black;
	font-size: 40px;
`;

const AddressHolder = styled.div`
	line-height: 1.5rem;
	height: 500px;
	width: 90%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const ButtonS = styled.button`
	height: 40px;
	width: 200px;
	background-color: #123456;
	border: none;
	border-radius: 5px;
	margin-top: 30px;
	color: white;
	font-weight: bold;
	cursor: pointer;
`;

const ButtonHolder = styled.div``;

const Text2 = styled.div`
	font-size: 40px;
	text-transform: capitalize;
	margin-top: 40px;
	font-weight: bold;
	@media screen and (max-width: 768px) {
		font-size: 15px;
		text-transform: capitalize;
	}
`;
const Space2 = styled.div`
	border: 1px solid #ef9f26;
	width: 150px;
	@media screen and (max-width: 768px) {
		border: 1px solid #ef9f26;
		width: 80px;
	}
`;

const MessageInput = styled.input`
	height: 120px;
	width: 500px;
	margin-top: 20px;
	outline: none;
	border-radius: 3px;
	border: 1px solid lightgray;
	padding-left: 10px;
	padding-bottom: 10px;
	@media screen and (max-width: 768px) {
		height: 120px;
		width: 270px;
		margin-top: 20px;
		text-transform: capitalize;
		outline: none;
		border-radius: 3px;
		border: 1px solid lightgray;
		padding-left: 10px;
	}
`;
const Input = styled.input`
	height: 50px;
	width: 500px;
	margin-top: 20px;
	text-transform: capitalize;
	outline: none;
	border-radius: 3px;
	border: 1px solid lightgray;
	padding-left: 10px;

	@media screen and (max-width: 768px) {
		height: 50px;
		width: 270px;
		margin-top: 20px;
		text-transform: capitalize;
		outline: none;
		border-radius: 3px;
		border: 1px solid lightgray;
		padding-left: 10px;
	}
`;
const FormCard = styled.div`
	height: 500px;
	width: 500px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		height: 300px;
		width: 280px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
`;
const Image = styled.img`
	height: 500px;
	width: 500px;
	object-fit: cover;
	@media screen and (max-width: 768px) {
		height: 300px;
		width: 280px;
		object-fit: cover;
	}
`;
const ImageCard = styled.div`
	height: 500px;
	width: 500px;
	box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		height: 300px;
		width: 280px;
		box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.4);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`;

const CardHolder = styled.div`
	height: 600px;
	width: 55%;
	margin-top: 40px;
	color: black;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		height: 700px;
		width: 90%;
		margin-top: 10px;
		color: black;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const OtherText = styled.div`
	font-size: 20px;
	text-transform: capitalize;
	color: white;
	z-index: 1;

	@media screen and (max-width: 768px) {
		font-size: 15px;
		text-transform: capitalize;
	}
`;
const Space = styled.div`
	border: 1px solid #ef9f26;
	width: 150px;
	@media screen and (max-width: 768px) {
		border: 1px solid #ef9f26;
		width: 80px;
	}
`;
const ContactDiv = styled.div`
	font-size: 40px;
	font-weight: bold;
	text-transform: capitalize;
	z-index: 1;
	@media screen and (max-width: 768px) {
		font-size: 20px;
		font-weight: bold;
		text-transform: capitalize;
	}
`;
const IconHolder = styled.div`
	color: black;
	z-index: 1;
	color: white;
`;

const TextHolder = styled.div`
	height: 300px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-image: url("bg.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
	opacity: 0.9;
	justify-content: center;
	align-items: center;

	&:after {
		content: "";
		background-color: rgba(0, 0, 0, 0.6);
		width: 100%;
		height: 300px;
		top: 0;
		bottom: 0;
		position: absolute;
	}

	@media screen and (max-width: 768px) {
		height: 300px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-image: url("bg.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		justify-content: center;
		align-items: center;
	}
`;

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	color: white;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
