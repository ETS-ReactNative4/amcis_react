//import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


export class Map extends HTMLElement {
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

    createdCallback() {
      ReactDom.render(
        <div id="myDiv">
          <br />
          <label className="label" />
        </div>,this
      );
    }
 };
 export default GoogleApiWrapper({
    apiKey: ('AIzaSyDdrZBAruxVoYJSlghk3v5Nd1x64orwvs4')
  })(Map)
 //export default Map;
 customElements.define('map-component-react',Map);