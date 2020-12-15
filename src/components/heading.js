import React from 'react';

const Heading = (props) => {
	return (
		<div onClick={props.loadWeather} className="heading">
			<ul className="heading-list">
				<li className="active">Ottawa</li>
				<li>Moscow</li>
				<li>Tokyo</li>
			</ul>
		</div>
	);
};

export default Heading;
