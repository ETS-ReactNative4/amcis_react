import React from 'react';
import { FilePicker } from 'react-file-picker'


class FileChooser extends HTMLElement {

  createdCallback() {
    ReactDom.render(
      <FilePicker
      extensions={['md']}
      onChange={FileObject => ('')}
      onError={errMsg => ('')}
    >
      <button>
        Click to upload markdown
      </button>
    </FilePicker>,document.getElementById('id')
    );
  }

}
export default FileChooser;

customElements.define('file-component-react',FileChooser);