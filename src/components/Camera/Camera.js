import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class CameraComponent extends HTMLElement {
    onTakePhoto(dataUri){
        console.log('takePhoto');
    }

    createdCallback() {
        ReactDom.render(
            <Camera onTakePhoto = {(dataUri) => {this.onTakePhoto(dataUri);}}/>,this
        );
      }
} 
export default CameraComponent
window.customElements.define('camera-component-react',CameraComponent);