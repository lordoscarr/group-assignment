import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input id="inputCity" type="text" name="city" placeholder="Insert city.."/>
		<button id="getWeatherButton">GET WEATHER</button>
	</form>
);

export default Form;
