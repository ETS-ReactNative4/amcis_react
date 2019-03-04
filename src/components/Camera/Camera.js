import React, { Component } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ReactWebComponent from "react-web-component";

class CameraComponent extends HTMLElement {
  onTakePhoto(dataUri) {
    console.log("takePhoto");
  }

  connectedCallback() {
    ReactDOM.render(
      <Camera
        onTakePhoto={dataUri => {
          this.onTakePhoto(dataUri);
        }}
      />
    );
  }
}
customElements.define("camera-component-react",CameraComponent);
export default CameraComponent;
ReactWebComponent.create(<CameraComponent />, "camera-component-react");
