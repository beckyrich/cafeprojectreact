/* need to figure out way around google API key OR how to properly secure
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Location extends Component {
  render(){

    const GoogleMapLocation = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{ lat: 47.610144, lng: -122.342551 }}
        defaultZoom = { 13 } 
      >
      </GoogleMap>
    ));

    return(
      <div>
        <GoogleMapLocation
          containerElement={ <div style={{ height: '500px', width: '500px' }}/>}
          mapElement={ <div style={{ height: '100%' }}/>}
        />
      </div>
    );
  }
};
export default Location;
*/
