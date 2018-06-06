import React from 'react';
import Dropzone from 'react-dropzone'

export default class IntermediatePageDrop extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone accept="text/calendar" onDrop={this.onDrop.bind(this)} style={{height: "100px", border: "1px dashed black"}}>
            <p>Drag the file or click here to select the file!</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}