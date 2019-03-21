import React, { Component } from 'react';

export class SpeechRecognition extends Component {

    data(){
        return{};
    }

    constructor() {
        super();
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

        if ('SpeechRecognition' in window) {
       let finalTranscript = '';
         let recognition = new window.SpeechRecognition();
         recognition.interimResults = true;
         recognition.maxAlternatives = 10;
         recognition.continuous = true;
         recognition.onresult = (event) => {
           let interimTranscript = '';
           for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
             let transcript = event.results[i][0].transcript;
             if (event.results[i].isFinal) {
               finalTranscript += transcript;
             } else {
               interimTranscript += transcript;
             }
           }
           if (document.getElementById("speech-container")==null){
            this.text = finalTranscript;    
        }else{
            var x = document.getElementById("speech-container");
            x.querySelector('.label').innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
        }
        
        
    }
    recognition.start();
} else {
    // speech recognition API not supported

     }
    }


    render(){
        return(

            <div id="myDiv">
    <br></br>
    <label className="label"></label>
            </div>

        );
    }
} 
export default SpeechRecognition