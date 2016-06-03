import React, { PropTypes } from 'react'
import uuid from 'uuid'

class Input extends React.Component {
  render () {
    var inputId = uuid.v1();
    var hasClass = (this.props.has != '') ? 'has-' + this.props.has : '';

    return (
      <div class={ "form-group" + " " + hasClass }>
          <label class="control-label col-md-2" for={inputId}>{this.props.label}</label>
          <div class="col-md-10">

            {this.props.children}

            {(this.props.help) ?
            <p class="help-block" style={ { marginTop:0} }>{this.props.help}</p>
            : ''}
          </div>
      </div>
    )
  }
}

export default Input;
