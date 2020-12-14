import React from 'react';

const Heading = (props) => {
	return (
		<div onClick={props.loadWeather}>
			<ul>
				<li>Ottawa</li>
				<li>Moscow</li>
				<li>Tokyo</li>
			</ul>
		</div>
	);
};

export default Heading;
