import React, { PropTypes } from 'react'
import uuid from 'uuid'

class Input extends React.Component {

  constructor (props) {
    super(props);
  }

  renderLabel () {
    if(this.props.label != undefined && this.props.label.toString() != '') {
      return (
        <label class="control-label col-md-2" for={ this.props.inputId }> { this.props.label } </label>
      )
    } else {
      return '';
    }
  }

  renderHelpMsg () {
    if(this.props.help.toString() != '') {
      return (
        <p class="help-block" style={ { marginTop:0} }>{this.props.help}</p>
      )
    } else {
      return '';
    }
  }

  render () {
    var hasClass = (this.props.has != '') ? 'has-' + this.props.has : '';

    return (
      <div class={ "form-group" + " " + hasClass }>
        <div class="col-md-10">
          { this.renderLabel.bind(this) }
          <input type="text" class="form-control input-sm" id={ this.props.inputId }/>

          { this.renderHelpMsg.bind(this) }
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  inputId: PropTypes.string
}

Input.defaultProps = {
  inputId: uuid.v1()
}

export default Input;
