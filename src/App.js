import React from 'react';
import './App.scss';
import Heading from './components/heading';
import Forecast from './components/forecast';

const api_key = '001030b21481afe9add02ad26a87f9fb';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			city: 'Ottawa',
			temp: '',
			desc: '',
			icon: ''
		};
	}

	componentDidMount() {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${api_key}`)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					isLoaded: true,
					temp: Math.round(result.main.temp),
					desc: result.weather[0].main,
				});
			});
	}

	getWeather = async (e) => {
		const city = e.target.innerHTML;
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					city: city,
					temp: Math.round(result.main.temp),
					desc: result.weather[0].main,
				});
			});
	};

	render() {
		const { isLoaded } = this.state;

		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					<Heading loadWeather={this.getWeather} />
					<Forecast city={this.state.city} temp={this.state.temp} desc={this.state.desc} />
				</div>
			);
		}
	}
}

export default App;
