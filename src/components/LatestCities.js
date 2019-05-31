import React from "react";
import City from "./City";

export default class LatestCities extends React.Component {

    createList() {
        let cities = this.props.cities;
        console.log(this.props.cities);
        if (cities) {
            let children = [];
            console.log(cities);
            cities.forEach(city => {
                children.push(<City city={city} key={city} />);
            });
            return children;
        }
    }

    render() {
        return (
            <div className="history-menu">
                <span className="recent-text">recent: </span>{this.createList()}
            </div>
        )
    }

}