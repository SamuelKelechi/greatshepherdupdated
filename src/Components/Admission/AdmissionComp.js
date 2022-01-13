import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import ProfCourse from "./ProfCourse";
import Requirements from "./Requirements";

const AdmissionComp = () => {
	return (
		<Container>
			<h3>ACCREDITED COURSE/PROGRAMS OFFERRED</h3>
			<p>which enables student of Nigeria extraction for Nysc mobilization.</p>
			<MainWrapper>
				<FirstComp>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>
							Linguistics(French and English , interpretation and transactional)
						</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Business Administration</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>International Relation / political science</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Transportation & logistic movement</Text>
					</TextHold>
				</FirstComp>
				<FirstComp>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Accountancy</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Computer Science</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>
							Pre Degree / Foundation program in french and English for one
							academic year
						</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Economics, Banking and Finance</Text>
					</TextHold>
				</FirstComp>
				<FirstComp>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Bsc Conversion</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>HND Conversion</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>International Relation / political science</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Accelerated Programmers at master level</Text>
					</TextHold>
				</FirstComp>
			</MainWrapper>

			<ProfCourse />
			<br />
			<br />
			<br />
			
		</Container>
	);
};

export default AdmissionComp;

const TextHold = styled.div`
	display: flex;
	align-items: center;

	span {
		margin-top: 15px;
	}
`;
const Text = styled.div`
	width: 300px;
	margin-left: 10px;
	font-size: 14px;
`;
const FirstComp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 10px;
`;

const MainWrapper = styled.div`
	width: 80%;
	display: flex;
	justify-content: center;
	/* align-items: center; */
	flex-wrap: wrap;

	margin-left: 50px;

	@media screen and (max-width: 760px) {
		margin-left: 0;
		width: 90%;
	}
	/* background-color: black; */
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;

	@media (max-width: 768px) {
		display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
		h3 {
			text-align: center;
		}

		p {
			/* text-align: center; */
			font-size: 12px;
            p
		}
	}
	/* background-color: red; */
	h3 {
		margin-top: 20px;
		/* height: 0; */
	}

	p {
		margin-top: 10px;
	}
`;
