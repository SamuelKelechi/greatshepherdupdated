import React, { useContext } from "react";
import { app } from "../../Base";
import { GlobalContext } from "../Global/GlobalContext";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const StudentDash = () => {
	const navigate = useNavigate();
	const { current, currentData } = useContext(GlobalContext);
	const [resultData, setResultData] = React.useState([]);
	// const [getFirst, setGetFirst] = React.useState([]);
	// const [getSecond, setGetSecond] = React.useState([]);
	// const [getFinal, setGetFinal] = React.useState([]);
	const [firstL1, setFirstL1] = React.useState(false);
	const [secondL1, setSecondL1] = React.useState(false);
	const [firstL2, setFirstL2] = React.useState(false);
	const [secondL2, setSecondL2] = React.useState(false);
	const [firstL3, setFirstL3] = React.useState(false);
	const [secondL3, setSecondL3] = React.useState(false);

	const handleClickFirstL1 = () => {
		setFirstL1(true);
		setSecondL1(false);
		setFirstL2(false);
		setSecondL2(false);
		setFirstL3(false);
		setSecondL3(false);
	};
	const handleClickSecondL1 = () => {
		setFirstL1(false);
		setSecondL1(true);
		setFirstL2(false);
		setSecondL2(false);
		setFirstL3(false);
		setSecondL3(false);
	};
	const handleClickFirstL2 = () => {
		setFirstL1(false);
		setSecondL1(false);
		setFirstL2(true);
		setSecondL2(false);
		setFirstL3(false);
		setSecondL3(false);
	};
	const handleClickSecondL2 = () => {
		setFirstL1(false);
		setSecondL1(false);
		setFirstL2(false);
		setSecondL2(true);
		setFirstL3(false);
		setSecondL3(false);
	};
	const handleClickFirstL3 = () => {
		setFirstL1(false);
		setSecondL1(false);
		setFirstL2(false);
		setSecondL2(false);
		setFirstL3(true);
		setSecondL3(false);
	};
	const handleClickSeconsL3 = () => {
		setFirstL1(false);
		setSecondL1(false);
		setFirstL2(false);
		setSecondL2(false);
		setFirstL3(false);
		setSecondL3(true);
	};

	const getResults = async () => {
		await app
			.firestore()
			.collection("results")

			.onSnapshot((snapShot) => {
				const item = [];
				snapShot.forEach((doc) => {
					item.push({ ...doc.data(), id: doc.id });
				});
				setResultData(item);
			});
	};

	React.useEffect(() => {
		getResults();
		// getResultsFirst();
		// getResultsSecond();
		// getResultsFinal();
		// console.log("this is the resultfdf", getFirst);
	}, []);

	return (
		<Container>
			<HeadHold>
				<ImageHold>
					<h4>
						Welcome <span>{currentData?.fullName}</span>{" "}
					</h4>
					<ImageUser src={currentData?.avatar} />
				</ImageHold>
				<Div
					onClick={() => {
						navigate("/");
					}}>
					Go Home{" "}
					<span>
						<BsFillArrowRightCircleFill />
					</span>
				</Div>
			</HeadHold>
			<ButtonHold>
				<button onClick={handleClickFirstL1}>100L First Semester </button>
				<button onClick={handleClickSecondL1}>100L 2nd Semester </button>
				<button onClick={handleClickFirstL2}>200L First Semester </button>
				<button onClick={handleClickSecondL2}>200L 2nd Semester </button>
				<button onClick={handleClickFirstL3}> 300L First Semester </button>
				<button onClick={handleClickSeconsL3}>300L 2nd Semester </button>
			</ButtonHold>
			<TableHold>
				<Items>
					<Text>Reg.Number</Text>
					<Text>{currentData?.regnumber}</Text>
				</Items>

				<Items>
					<Text>FullName</Text>
					<Text>{currentData?.fullName}</Text>
				</Items>
				<Items>
					<Text>Gender</Text>
					<Text>{currentData?.gender}</Text>
				</Items>
				<Items>
					<Text>Email</Text>
					<Text>{currentData?.email}</Text>
				</Items>
			</TableHold>
			<br />
			<br />
			<br />
			<br />
			<div>
				{firstL1 ? (
					<div>
						{" "}
						{resultData.map((props) => (
							<div>
								{props.selectStud === currentData?.fullName &&
								props.level === "100" &&
								props.semesterVal === "first" ? (
									<div>
										<div
											style={{
												fontWeight: "bold",
												marginLeft: "10px",
											}}>
											<a href={props.avatar} download>
												<div>Save /Download Result</div>
											</a>
										</div>
										<ResImage src={props.avatar} />
									</div>
								) : null}
							</div>
						))}
					</div>
				) : (
					<div>
						{secondL1 ? (
							<div>
								{" "}
								{resultData.map((props) => (
									<div>
										{props.selectStud === currentData?.fullName &&
										props.level === "100" &&
										props.semesterVal === "second" ? (
											<div>
												<div
													style={{
														fontWeight: "bold",
														marginLeft: "10px",
													}}>
													<a href={props.avatar} download>
														<div>Save /Download Result</div>
													</a>
												</div>
												<ResImage src={props.avatar} />
											</div>
										) : null}
									</div>
								))}
							</div>
						) : (
							<div>
								{firstL2 ? (
									<div>
										{" "}
										{resultData.map((props) => (
											<div>
												{props.selectStud === currentData?.fullName &&
												props.level === "200" &&
												props.semesterVal === "first" ? (
													<div>
														<div
															style={{
																fontWeight: "bold",
																marginLeft: "10px",
															}}>
															<a href={props.avatar} download>
																<div>Save /Download Result</div>
															</a>
														</div>
														<ResImage src={props.avatar} />
													</div>
												) : null}
											</div>
										))}
									</div>
								) : (
									<div>
										{secondL2 ? (
											<div>
												{" "}
												{resultData.map((props) => (
													<div>
														{props.selectStud === currentData?.fullName &&
														props.level === "200" &&
														props.semesterVal === "second" ? (
															<div>
																<div
																	style={{
																		fontWeight: "bold",
																		marginLeft: "10px",
																	}}>
																	<a href={props.avatar} download>
																		<div>Save /Download Result</div>
																	</a>
																</div>
																<ResImage src={props.avatar} />
															</div>
														) : null}
													</div>
												))}
											</div>
										) : (
											<div>
												{firstL3 ? (
													<div>
														{" "}
														{resultData.map((props) => (
															<div>
																{props.selectStud === currentData?.fullName &&
																props.level === "300" &&
																props.semesterVal === "first" ? (
																	<div>
																		<div
																			style={{
																				fontWeight: "bold",
																				marginLeft: "10px",
																			}}>
																			<a href={props.avatar} download>
																				<div>Save /Download Result</div>
																			</a>
																		</div>
																		<ResImage src={props.avatar} />
																	</div>
																) : null}
															</div>
														))}
													</div>
												) : (
													<div>
														{secondL3 ? (
															<div>
																{" "}
																{resultData.map((props) => (
																	<div>
																		{props.selectStud ===
																			currentData?.fullName &&
																		props.level === "300" &&
																		props.semesterVal === "second" ? (
																			<div>
																				<div
																					style={{
																						fontWeight: "bold",
																						marginLeft: "10px",
																					}}>
																					<a href={props.avatar} download>
																						<div>Save /Download Result</div>
																					</a>
																				</div>
																				<ResImage src={props.avatar} />
																			</div>
																		) : null}
																	</div>
																))}
															</div>
														) : (
															<div>
																{" "}
																{resultData.map((props) => (
																	<div>
																		{props.selectStud ===
																			currentData?.fullName &&
																		props.level === "100" &&
																		props.semesterVal === "first" ? (
																			<div>
																				<div
																					style={{
																						fontWeight: "bold",
																						marginLeft: "10px",
																					}}>
																					<a href={props.avatar} download>
																						<div>Save /Download Result</div>
																					</a>
																				</div>
																				<ResImage src={props.avatar} />
																			</div>
																		) : null}
																	</div>
																))}
															</div>
														)}
													</div>
												)}
											</div>
										)}
									</div>
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</Container>
	);
};

export default StudentDash;

const Items = styled.tr`
	:nth-child(even) {
		background-color: #dddddd;
	}

	/* display: flex;
	justify-content: space-between; */

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
const Text = styled.td`
	/* margin-top: 10px; */
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
	/* border-bottom: 1px solid silver; */
`;

const ButtonHold = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	justify-content: center;
	padding-bottom: 20px;
	flex-wrap: wrap;

	button {
		height: 50px;
		width: 200px;
		margin: 10px;
		cursor: pointer;
		background-color: #505050;
		color: white;
		font-weight: bold;
	}

	@media screen and (max-width: 768px) {
		button {
			width: 130px;
		}
	}
`;

const TableHold = styled.table`
	/* height: 200px; */
	width: 80%;
	font-family: arial, sans-serif;
	border-collapse: collapse;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const HeadHold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #00243a;
	width: 80%;

	@media screen and (max-width: 760px) {
		width: 90%;
	}
`;
const Div = styled.div`
	font-weight: bold;
	display: flex;
	cursor: pointer;

	align-items: center;
	span {
		margin-top: 5px;
	}
`;
const Container = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 70vh;
`;
const ImageUser = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background: silver;
	margin-left: 5px;
	object-fit: cover;
`;
const ImageHold = styled.div`
	display: flex;
	align-items: center;
	font-size: 25px;

	@media screen and (max-width: 760px) {
		font-size: 13px;
	}
`;

const ResImage = styled.iframe`
	height: 500px;
	width: 80vw;
	object-fit: cover;
	margin: 10px;
	overflow: hidden;

	@media screen and (max-width: 760px) {
		width: 90vw;
	}
`;
