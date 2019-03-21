import React, { Component } from 'react';
import { FilePicker } from 'react-file-picker'

class FileChooser extends Component {

render(){
    return(
    <FilePicker
      extensions={['md']}
      onChange={FileObject => ('')}
      onError={errMsg => ('')}
    >
      <button>
        Click to upload markdown
      </button>
    </FilePicker>
  );}
}
export default FileChooser; 