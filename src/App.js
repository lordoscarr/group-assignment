import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    // let bikes = [];

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function () {
    //     let coords = navigator.geolocation.coords;
    //     console.log('lat: ' + coords.latitude + ', long: ' + coords.longitude);

    //     // Set up our HTTP request
    //     var xhr = new XMLHttpRequest();

    //     // Setup our listener to process completed requests
    //     xhr.onload = function () {

    //       // Process our return data
    //       if (xhr.status >= 200 && xhr.status < 300) {
    //         console.log('success!', xhr);
    //         bikes = xhr;
    //         console.log(JSON.parse(bikes));
    //       } else {
    //         console.log('The request failed!');
    //       }
    //     };

    //     // Create and send a GET request
    //     // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    //     // The second argument is the endpoint URL
    //     xhr.open('GET', "https://api.voiapp.io/v1/vehicle/status/ready?lat=" + coords.latitude + "&lng=" + coords.longitude);
    //     xhr.send();
    //   });
    // } else {
    //   // Browser doesn't support Geolocation
    //   console.log('map error');
    // }

    console.log('location: ' + this.state.mapCenter);
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCgbwkMmcBt9QOcgnqTL6rHqwaz3iAHCg0'
})(MapContainer);