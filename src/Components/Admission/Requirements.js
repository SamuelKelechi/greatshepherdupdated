import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
const Requirements = () => {
	return (
		<Container>
			<TextUp>Admission Requirements</TextUp>

			<MainWrapper>
				<FirstComp>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>
							A copy of O'Level result with five credits in not more than two
							sitting
						</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>A copy of birth Certificate </Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>
							Four passport photograph with coloured background in A4 envelope.
						</Text>
					</TextHold>
				</FirstComp>
				<FirstComp>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>
							Travelling documents (international passport or ecowas passport)
						</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>Two passport photograph of sponsors</Text>
					</TextHold>
					<TextHold>
						{" "}
						<span>
							<AiFillCheckCircle />
						</span>
						<Text>
							Those for direct entry and convocation the above requirements
							should be accomplished
						</Text>
					</TextHold>
				</FirstComp>
			</MainWrapper>
			<br />
			<br />
			<CardHold>
				<Card1 bg='#014e62'>
					{" "}
					<FirstComp>
						<h3>OUR FACILITIES</h3>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>
								Well qualified team of staff (PHD holders, professors and
								associate professors)
							</Texting>
						</TextHold>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>
								Well ventured lecture room with modern furniture and spacious
								arena to guarantee comfort{" "}
							</Texting>
						</TextHold>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>Wi-fi</Texting>
						</TextHold>
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>Well equipped library</Texting>
						</TextHold>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>
								ICT Programmers with new horizon to more students more ICT
								COMPLAINT
							</Texting>
						</TextHold>
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>Computer laboratory</Texting>
						</TextHold>
						<br />
						<TextHold>
							{" "}
							<span>
								<AiFillCheckCircle />
							</span>
							<Texting>
								Language laboratory with good device to ensure the best form of
								learning by beginners
							</Texting>
						</TextHold>
					</FirstComp>
				</Card1>

				<SecondHold>
					<Card1 bg='#338497'>
						{" "}
						<FirstComp>
							<h3>ACADEMIC CALENDAR</h3>
							<TextHold>
								{" "}
								<span>
									<AiFillCheckCircle />
								</span>
								<Texting>1st Semester : September - December</Texting>
							</TextHold>
							<TextHold>
								{" "}
								<span>
									<AiFillCheckCircle />
								</span>
								<Texting>2nd Semester : january - April </Texting>
							</TextHold>
							<TextHold>
								{" "}
								<span>
									<AiFillCheckCircle />
								</span>
								<Texting>3rd Semester : May - July</Texting>
							</TextHold>
						</FirstComp>
					</Card1>
					<Card1 bg='#ff512f'>
						{" "}
						<FirstComp>
							<h3>ADMISSION PROCESS</h3>
							<TextHold>
								{" "}
								<span>
									<AiFillCheckCircle />
								</span>
								<Texting>April - September</Texting>
							</TextHold>
							<TextHold>
								{" "}
								<span>
									<AiFillCheckCircle />
								</span>
								<Texting>December - April </Texting>
							</TextHold>
							<TextHold>
								{" "}
								<Texting>
									Note that admission is on going due to our flexible academic
									calendar
									<br />
									<br />
									<span style={{ fontWeight: "bold" }}>
										for inquires contact
									</span>{" "}
									<br /> +229 642 51703, +234 706 294 4349 <br /> +229 6092
									5020, +229 6666 6774 <br /> Email : espadmission@gmail.com
								</Texting>
							</TextHold>
						</FirstComp>
					</Card1>
				</SecondHold>
			</CardHold>
		</Container>
	);
};

export default Requirements;

const SecondHold = styled.div``;
const CardHold = styled.div`
	/* padding-bottom: 30px; */
	display: flex;
	flex-wrap: wrap;
`;
const Card1 = styled.div`
	/* width: 300px; */
	background: ${({ bg }) => bg};
	color: white;
	padding: 20px;
	border-radius: 10px;
	margin: 10px;
	padding-bottom: 20px; /* height: 300px; */
	@media screen and (max-width: 760px) {
		padding: 10px;
	}
`;

const TextHold = styled.div`
	display: flex;
	align-items: center;

	span {
		margin-top: 15px;
	}
`;
const Texting = styled.div`
	width: 330px;
	margin-left: 10px;
	font-size: 14px;

	@media screen and (max-width: 760px) {
		width: 300px;
	}
`;
const Text = styled.div`
	width: 350px;
	margin-left: 10px;
	font-size: 20px;

	@media screen and (max-width: 760px) {
		width: 300px;
		margin-left: 10px;
		font-size: 15px;
	}
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
	}
	/* background-color: black; */
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const TextUp = styled.div`
	height: 70px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	background: #01409d;
	width: 100%;
	color: white;
`;
