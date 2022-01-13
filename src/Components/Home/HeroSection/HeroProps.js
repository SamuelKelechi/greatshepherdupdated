import React from "react";

const HeroProps = ({ bg, img, header, detail }) => {
	return (
		<div
			style={{
				width: "100%",
				height: "380px",

				borderRadius: "5px",
				// justifyContent: "flex-start",
				color: "white",
				flexDirection: "column",
				textAlign: "left",

				margin: "20px 20px",
			}}>
			<div
				style={{
					width: "100%",
					height: "100%",
					borderRadius: "50%",
					backgroundColor: bg,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginLeft: "20px",
					marginTop: "20px",
					marginBottom: "90px",
					backgroundColor: "rgba(0%,0%, 0%, 0.4)",
				}}>
				<img
					src={img}
					alt='1st img'
					style={{
						width: "100%",
						height: "100%",
						borderRadius: "50%",
						objectFit: "contain",
					}}
				/>
			</div>

			<div
				style={{
					fontSize: "25px",
					marginLeft: "20px",
					marginBottom: "20px",
					color: "black",
				}}>
				{header}
			</div>
			<div
				style={{
					// fontSize: "25px",
					marginLeft: "20px",
					color: "black",
				}}>
				{detail}
			</div>
		</div>
	);
};

export default HeroProps;
