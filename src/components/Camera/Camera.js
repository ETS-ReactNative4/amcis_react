import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class CameraComponent extends Component {

    constructor() {
        console.log("Start camera", new Date().getTime());
        super();
      }
    
    onTakePhoto(dataUri){
        console.log('takePhoto');
    }

    render(){
        return(
            <Camera onTakePhoto = {(dataUri) => {this.onTakePhoto(dataUri);}}
       />
       );
        
    }

    componentDidMount() {
        console.log("build camera", new Date().getTime());
      }
} 
export default CameraComponent