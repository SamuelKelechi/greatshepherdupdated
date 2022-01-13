import React from "react";
import styled from "styled-components";
import img from "./img/back.jpg";
import flag from "./img/flag1.png";
import flag2 from "./img/flag2.jpg";
import flag3 from "./img/flag3.png";
import flag4 from "./img/flag4.jpg";

function Inter() {
	return (
		<Container>
			<Wrapper>
				<Allflag>
					<Flag>
						<img src={flag} />
					</Flag>
					<Flag>
						<img src={flag2} />
					</Flag>
					<Flag>
						<img src={flag3} />
					</Flag>
					<Flag>
						<img src={flag4} />
					</Flag>
				</Allflag>
				<Title>INTERNATIONAL APPLICATION</Title>
				<Arr>
					Accredited course through affiliation with forign partner universities
					in Cameroon, France
					<br />
					************************
				</Arr>
				<Text>
					<span>1.Low</span>
					<span>
						2.Top-up programmed in environmental sciences (Public & Allied
						Health)
					</span>
					<span>3.Registered Nurse, Midwife Top-up Programme</span>
					<span>4.Educational Management</span>
					<span>5.M.SC, MA & MBA</span>
					<span>6.Ph.D.</span>
				</Text>
			</Wrapper>
		</Container>
	);
}

export default Inter;

const Text = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;

	color: white;
	text-align: center;
	@media screen and (max-width: 425px) {
		width: 90%;
	}
`;

const Arr = styled.div`
	width: 30%;
	height: auto;
	text-align: center;
	color: white;

	@media screen and (max-width: 425px) {
		width: 70%;
		height: auto;
		text-align: center;

		color: white;
	}

	@media screen and (max-width: 375px) {
		width: 80%;
		height: auto;
		text-align: center;

		color: white;
	}

	@media screen and (max-width: 320px) {
		width: 90%;
		height: auto;
		text-align: center;

		color: white;
	}
`;

const Title = styled.div`
	width: 50%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: 400;
	font-size: 40px;
	margin-top: 5px;

	@media screen and (max-width: 1024px) {
		width: 90%;
		font-size: 50px;
	}

	@media screen and (max-width: 600px) {
		width: 90%;
		font-size: 19px;
	}
	@media screen and (max-width: 375px) {
		width: 90%;
		font-size: 24px;
	}
	@media screen and (max-width: 320px) {
		width: 90%;
		font-size: 20px;
	}
`;

const Flag = styled.div`
	height: 80px;
	width: 80px;
	background-color: pink;
	border-radius: 50%;
	border: 2px solid white;
	box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

	img {
		height: 80px;
		width: 80px;
		border-radius: 50%;
		object-fit: cover;
	}

	@media screen and (max-width: 425px) {
		height: 55px;
		width: 55px;
		background-color: pink;
		border-radius: 50%;
		border: 2px solid white;
		box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

		img {
			height: 55px;
			width: 55px;
			border-radius: 50%;
			object-fit: cover;
		}
	}
`;

const Allflag = styled.div`
	width: 28%;
	height: auto;
	display: flex;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media screen and (max-width: 1024px) {
		width: 70%;
		height: auto;

		display: flex;
		/* align-items: center;
justify-content:center */
	}

	@media screen and (max-width: 425px) {
		width: 65%;
		height: auto;

		display: flex;
		/* align-items: center;
justify-content:center */
	}

	@media screen and (max-width: 375px) {
		width: 70%;
		height: auto;

		display: flex;
		/* align-items: center;
justify-content:center */
	}

	@media screen and (max-width: 320px) {
		width: 80%;
		height: auto;

		display: flex;
		/* align-items: center;
justify-content:center */
	}
`;

const Container = styled.div`
	width: 100%;
	height: auto;
	/* background-image: url(${img}); */
	background-repeat: repeat-y;
	background-size: cover;
`;
const Wrapper = styled.div`
	width: 100%;
	height: auto;
	background-color: #ed468b;
	/* opacity: 0.9; */
	display: flex;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
`;
