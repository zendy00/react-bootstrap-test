import React, { PropTypes } from 'react'

class Label extends React.Component {
  render () {
    return (
      <div class="form-group">
          <label class="control-label col-md-2">{this.props.label}</label>
          <div class="form-control-static col-md-10">
            <p>{this.props.text}</p>
          </div>
      </div>
    )
  }
}

export default Label;
