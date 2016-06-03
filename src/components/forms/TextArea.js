import React, { PropTypes } from 'react'

class TextArea extends React.Component {
  render () {
    return (
      <div class="form-group col-sm-12 form-control">
          <label class="control-label col-sm-3" >{this.props.label}</label>
          <textarea class="form-control col-sm-8" rows="3"></textarea>
      </div>
    )
  }
}

export default TextArea;
