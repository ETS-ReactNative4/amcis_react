import React from 'react';
import ReactWebComponent from 'react-web-component';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Camera from "./components/Camera/Camera";
import FileChooser from "./components/FileChooser/FileChooser";
import GPS from"./components/GPS/GPS";
import Map from "./components/Map/Map";
import SpeechRecognition from "./components/SpeechRecognition/SpeechRecognition"

ReactWebComponent.create(<SpeechRecognition />, 'speech-component-react');
ReactWebComponent.create(<Camera />, 'camera-component-react');
ReactWebComponent.create(<FileChooser />, 'file-component-react');
ReactWebComponent.create(<GPS />, 'gps-component-react');
ReactWebComponent.create(<Map />, 'map-component-react');
registerServiceWorker();
