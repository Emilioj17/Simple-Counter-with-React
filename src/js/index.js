//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";

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
				<p className="d-inline digTres">{props.tres}</p>
				<p className="d-inline digDos">{props.dos}</p>
				<p className="d-inline digUno">{props.uno}</p>
			</div>
		</div>
	);
};

Home.propTypes = {
	cuatro: PropTypes.string,
	tres: PropTypes.string,
	dos: PropTypes.string,
	uno: PropTypes.string
};

//Esta función y lógica no es mia.
let counter = 0;
setInterval(function() {
	const ncuatro = Math.floor(counter / 1000);
	const ntres = Math.floor(counter / 100);
	const ndos = Math.floor(counter / 10);
	const nuno = Math.floor(counter / 1);
	console.log(ncuatro, ntres, ndos, nuno);
	counter++;
	ReactDOM.render(
		<Home cuatro={ncuatro} tres={ntres} dos={ndos} uno={nuno} />,
		document.querySelector("#app")
	);
}, 1000);
//render your react application
