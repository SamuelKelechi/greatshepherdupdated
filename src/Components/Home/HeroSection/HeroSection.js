import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from "../Images/3.jpg";
import pic2 from "../Images/4.jpg";
import pic4 from "../Images/6.jpg";

const HeroSection = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<>
		<Container>
			<Wrapper>
				<Mylider {...settings}>
					<MyStyled>
						<SliderImage src={pic1} />
					</MyStyled>
					<MyStyled>
						<SliderImage src={pic4} />
					</MyStyled>
					<MyStyled>
						<SliderImage src={pic2} />
					</MyStyled>
				</Mylider>
			</Wrapper>
			<TextHold>
				<h2>GREAT SHEPHERD UNIVERSITY</h2>
				<p>
					Approved and Accredited on the 18 October, 1999 by Decree 
					No:0136/MENRS/CAB/DC/SP
				</p>
				<br />
				<p>
					At Great Shepherd University, we organise TOEFL regularly to
					enable students meet, study and understand immigration/employment
					requirements in United States and Canada
				</p>
			</TextHold>
		</Container>
		</>
	);
};

export default HeroSection;

const TextHold = styled.div`
	position: absolute;
	display: flex;

	color: white;
	/* width: 100%; */
	margin-left: 150px;
	margin-top: 80px;
	flex-direction: column;

	h2 {
		font-size: 35px;
		/* width: 100%; */
		font-weight: bold;
		width: 26.0ch;
		animation: typing 10s steps(45, end), blink-caret 0.85s step-end infinite;
		animation-iteration-count: infinite;
		white-space: nowrap;
		overflow: hidden;
		border-right: 3px solid;

		@keyframes typing {
			from {
				width: 0;
			}
			@keyframes blink {
				50% {
					border-color: transparent;
				}
			}
		}
	}
	p {
		width: 500px;
		margin: 0;
		margin-top: -20px;
		font-weight: bold;
	}

	@media screen and (max-width: 600px) {
		margin: 0;
		margin-left: 10px;
		margin-top: 50px;

		p {
			font-size: 12px;
			width: 300px;
			margin-top: 1px;
		}

		h2 {
			font-size: 17px;
			width: 258px;
			/* width: 40.8ch; */
			overflow: none;
		}
	}
`;

const Container = styled.div`
	width: 100%;
	height: 400px;
	overflow: hidden;
	margin-bottom: 120px;
	padding-top: 45px;

	@media screen and (max-width: 425px){
	margin-bottom: 10px;
	}

	/* padding-top: 80px; */
`;
const Mylider = styled(Slider)`
	button {
		/* z-index: 1; */
	}
`;
const MyStyled = styled.div`
	width: 100%;
	height: 500px;
	background-color: rgba(0%, 0%, 0%, 1);
	overflow: hidden;
	color: black;

	@media screen and (max-width: 600px) {
		height: 400px;
	}
`;
const Wrapper = styled.div`
	width: 100%;
	position: absolute;
	overflow: hidden;
`;
const SliderImage = styled.img`
	width: 100%;
	height: 100%;
	opacity: 0.3;

	object-fit: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
`;
