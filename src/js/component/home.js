import React from "react";

let Home = props => {
	return (
		<div
			className="text-center pt-5 bg-dark text-white"
			style={{ height: "100vh", fontSize: "100px" }}>
			<p className="d-inline px-2">
				<i className="far fa-clock"></i>
			</p>
			<div className="d-inline">
				<p className="d-inline digCuatro">{props.cuatro}</p>
				<p className="d-inline digTres">3</p>
				<p className="d-inline digDos">2</p>
				<p className="d-inline digUno">1</p>
			</div>
		</div>
	);
};

Home.propTypes = {
	cuatro: PropType.string
};
