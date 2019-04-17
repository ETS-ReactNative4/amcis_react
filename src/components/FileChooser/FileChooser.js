import React, { Component } from 'react';

class FileChooser extends Component {

  constructor() {
    console.log("Start file", new Date().getTime());
    super();
  }

  onInputChange(selectorFiles)
  {
      console.log(selectorFiles);
  } 

render(){
    return(
    
      <div class="image-upload">
          <div class="image-upload__edit">
            <label htmlFor="file"></label>
            <input type="file" name="files[]" id="file" accept="image/*" class="image-upload__input"
              onChange={($event) => this.onInputChange($event.target.files)} />
          </div>
    
          <div class="image-upload__preview">
            <div id="image-preview"></div>
          </div>
        </div>

  );}
  componentDidMount() {
    console.log("build file", new Date().getTime());
  }
}
export default FileChooser; 