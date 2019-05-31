
import React from "react";

const Weather = props => (
	<div>
		<div className="locationtitle">
			{
				props.city && <h1 className="weather__key"><span className="weather__value"> {props.city}</span>
				</h1>
			}
		</div>
		<div className="weather__info">

			{
				props.temperature && <p className="weather__key"> Temperature:
	 		<span className="weather__value"> {props.temperature}	</span>
				</p>
			}

			{
				props.description && <p className="weather__key"> Conditions:
			<span className="weather__value"> {props.description} </span>
				</p>
			}

			{
				props.humidity && <p className="weather__key"> Humidity:
	 		<span className="weather__value"> {props.humidity} </span>
				</p>
			}

			{
				props.pressure && <p className="weather__key"> Pressure:
		 <span className="weather__value"> {props.pressure} </span>
				</p>
			}

			{
				props.wind && <p className="weather__key"> Wind:
		<span className="weather__value"> {props.wind} </span>
				</p>
			}

			{
				props.error && <p className="weather__error">{props.error}</p>
			}
		</div>
	</div>
);

export default Weather;
