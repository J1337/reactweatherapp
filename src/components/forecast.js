import React from 'react';

const Forecast = (props) => {
	return (
		<div className="forecast">
			<div className="forecast-current">
				<h2>Today</h2>
				<div className="forecast-current-data">
					<div>
						<img alt="Weather Icon" src={props.icon}></img>
					</div>
					<div>
						<h3>{props.temp}°</h3>
						<p>{props.desc}</p>
					</div>
				</div>
			</div>
			<div className="forecast-daily">
				<h2>Wed</h2>
				<div>
					<img alt="Weather Icon" src={props.icon}></img>
				</div>
				<div>
					<h3>{props.temp}°</h3>
				</div>
			</div>
			<div className="forecast-daily">
				<h2>Thu</h2>
				<div>
					<img alt="Weather Icon" src={props.icon}></img>
				</div>
				<div>
					<h3>{props.temp}°</h3>
				</div>
			</div>
			<div className="forecast-daily">
				<h2>Fri</h2>
				<div>
					<img alt="Weather Icon" src={props.icon}></img>
				</div>
				<div>
					<h3>{props.temp}°</h3>
				</div>
			</div>
			<div className="forecast-daily">
				<h2>Sat</h2>
				<div>
					<img alt="Weather Icon" src={props.icon}></img>
				</div>
				<div>
					<h3>{props.temp}°</h3>
				</div>
			</div>
		</div>
	);
};

export default Forecast;
