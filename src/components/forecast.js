import React from 'react';

const Forecast = (props) => {
	return (
		<div>
			<div>
				<h2>Today</h2>
				<div>
					<img alt="Weather Icon"></img>
				</div>
				<div>
					<p>{props.temp}°</p>
					<p>{props.desc}</p>
				</div>
			</div>
			<div>
				<h2>Wed</h2>
				<div>
					<img alt="Weather Icon"></img>
				</div>
				<div>
					<p>{props.temp}°</p>
				</div>
			</div>
			<div>
				<h2>Thu</h2>
				<div>
					<img alt="Weather Icon"></img>
				</div>
				<div>
					<p>{props.temp}°</p>
				</div>
			</div>
			<div>
				<h2>Fri</h2>
				<div>
					<img alt="Weather Icon"></img>
				</div>
				<div>
					<p>{props.temp}°</p>
				</div>
			</div>
			<div>
				<h2>Sat</h2>
				<div>
					<img alt="Weather Icon"></img>
				</div>
				<div>
					<p>{props.temp}°</p>
				</div>
			</div>
		</div>
	);
};

export default Forecast;
