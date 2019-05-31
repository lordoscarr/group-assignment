import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input id="inputCity" type="text" name="city" placeholder="City name"/>
		<button id="getWeatherButton">Get Weather</button>
	</form>
);

export default Form;
