import React from 'react';

const Form = (props) => {
	return (
		<form>
			<input type="text" name="city" placeholder="choose a city" />
			<input type="text" name="country" placeholder="choose a country" />
			<button>Get Weather</button>
		</form>
	);
};

export default Form;
