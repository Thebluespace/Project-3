import React from 'react';
import {geolocated} from 'react-geolocated';
 
class Geo extends React.Component {
  reportGeo = () => {
    if(!this.props.isGeolocationAvailable) this.props.myCallback({"error":"No Geo Available!"});
    if(!this.props.isGeolocationEnabled) this.props.myCallback({"error":"Geo Not Enabled!"});
    this.props.myCallback({"Geo":this.props.coords.latitude + "," + this.props.coords.longitude,"error":""});
  }
  render () {
    return this.reportGeo;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Geo);