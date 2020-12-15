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
			icon: '',
		};
	}

	//When component loads fetch initial weather data then store in state
	componentDidMount() {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${api_key}`)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					isLoaded: true,
					temp: Math.round(result.main.temp),
					desc: result.weather[0].main,
					icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
				});
			});
	}

	// When city name is clicked, get weather data for that city name, store in state, and call function to change active
	getWeather = async (e) => {
		const city = e.target.innerHTML;
		this.activeClass(e);
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					city: city,
					temp: Math.round(result.main.temp),
					desc: result.weather[0].main,
					icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
				});
			});
	};

	// Change active class on headings for style change
	activeClass = (e) => {
		const headings = document.getElementsByClassName('heading-list-item');
		for (const item of headings) {
			item.classList.remove('active');
			e.target.classList.add('active');
		}
	};

	render() {
		const { isLoaded } = this.state;

		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="app">
					<Heading loadWeather={this.getWeather} />
					<Forecast city={this.state.city} temp={this.state.temp} desc={this.state.desc} icon={this.state.icon} />
				</div>
			);
		}
	}
}

export default App;
