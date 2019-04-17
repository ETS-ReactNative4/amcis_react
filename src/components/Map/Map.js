import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

export class Map extends Component {

  constructor() {
    console.log("Start map", new Date().getTime());
    super();
  }

    render() {
    const GoogleMapExample = withGoogleMap(props => (
       <GoogleMap
         defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
         defaultZoom = { 13 }
       >
       </GoogleMap>
    ));
    return(
       <div>
         <GoogleMapExample
           containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
           mapElement={ <div style={{ height: `100%` }} /> }
         />
       </div>
    );
    }
    componentDidMount(){
      console.log("build map", new Date().getTime());
    }
 };


 export default GoogleApiWrapper({
    apiKey: ('AIzaSyDdrZBAruxVoYJSlghk3v5Nd1x64orwvs4')
  })(Map)
 //export default Map; 