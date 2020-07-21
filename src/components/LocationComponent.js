import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Location extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return(
        <div style={{position: "relative", height: "500px"}}>
          <Map 
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: 47.610144, lng: -122.342551 }}
          >
            <Marker position={{ lat: 47.610144, lng: -122.342551 }} />
          </Map>
          
        </div>
    );
  }
};

const mapStyles = {
  position: 'relative', 
  width: '100%',
  height: '500px',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCzAQENrT-cAfzhOfDkWPhL1X8NowRXDf8'
})(Location);
