import React from 'react';

const Heading = (props) => {
	return (
		<div onClick={props.loadWeather} className="heading">
			<ul className="heading-list">
				<li className="heading-list-item active">Ottawa</li>
				<li className="heading-list-item">Moscow</li>
				<li className="heading-list-item">Tokyo</li>
			</ul>
		</div>
	);
};

export default Heading;
