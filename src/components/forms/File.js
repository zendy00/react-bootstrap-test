import React, { PropTypes } from 'react'

class File extends React.Component {
  render () {
    return (
      <div class="form-group">
          <label class="control-label col-sm-3">File input</label>
          <input class="col-sm-9" type="file" />
      </div>
    )
  }
}

export default File;
