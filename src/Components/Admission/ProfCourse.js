import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import pic1 from "./img/1.jpg";
import pic2 from "./img/2.jpg";
const ProfCourse = () => {
	return (
		<Container>
			<MainHold>
				<ImageHold src={pic1} />
				<FirstComp>
					<h2>PROFESSIONAL COURSES (B.Sc.)</h2>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Industrial Security & safety management</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Maritime Security & safety management</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Natural Science</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Marin Engineering</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Criminology Studies</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Legal & Comprehensive Study in education management</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Public Health</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Nursing </Text>
					</TextHold>
				</FirstComp>
			</MainHold>
			<MainHold>
				<FirstComp>
					<h2>PROFESSIONAL MASTER (M.Sc.)</h2>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Criminology & Security Pychology</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text> Legal & Managerial Psychology</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Legal & Criminology Psychology</Text>
					</TextHold>
				</FirstComp>
				<ImageHold src={pic2} />
			</MainHold>
		</Container>
	);
};

export default ProfCourse;

const MainHold = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 50px;
`;
const ImageHold = styled.img`
	height: 350px;
	width: 500px;
	object-fit: cover;
	border: 1px solid silver;
	margin: 20px;

	@media screen and (max-width: 760px) {
		width: 320px;
	}
`;
const TextHold = styled.div`
	display: flex;
	align-items: center;

	span {
		margin-top: 10px;
	}
`;
const Text = styled.div`
	width: 300px;
	margin-left: 10px;
	font-size: 17px;
`;
const FirstComp = styled.div`
	display: flex;
	/* justify-content: center; */
	/* align-items: center; */
	flex-direction: column;

	margin: 20px;
	margin-top: -10px;
	/* margin-left: 40px; */

	/* margin-top: 10px; */
`;

const Container = styled.div`
	/* margin-top: 80px; */
`;
