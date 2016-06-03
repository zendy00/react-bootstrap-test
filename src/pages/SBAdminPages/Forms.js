import React, { PropTypes } from 'react'
import Input from '../../components/forms/Input'
import Label from '../../components/forms/Label'
import File from '../../components/forms/File'
import TextArea from '../../components/forms/TextArea'

class Forms extends React.Component {
  render () {
    return (
      <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Forms</h1>
                </div>
                {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Basic Form Elements
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <form role="form" class="form-horizontal">
                                      <Input label="Text Input" help="Example block-level help text here." has="error">
                                        {/*<input type="text" class="form-control input-sm" />*/}
                                        <span>test</span>
                                      </Input>
                                      <Input label="with Placeholder" placeholder="Enter text"></Input>
                                      <Label label="Static Control" text="zendy@sainfo.co.kr" />
                                      <div class="form-group">
                                          <label>File input</label>
                                          <input type="file" />
                                      </div>
                                      <div class="form-group">
                                          <label>Text area</label>
                                          <textarea class="form-control" rows="3"></textarea>
                                      </div>
                                        <div class="form-group">
                                            <label>Checkboxes</label>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" value="" />Checkbox 1
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" value="" />Checkbox 2
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" value="" />Checkbox 3
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Inline Checkboxes</label>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" />1
                                            </label>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" />2
                                            </label>
                                            <label class="checkbox-inline">
                                                <input type="checkbox" />3
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label>Radio Buttons</label>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />Radio 1
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Radio 2
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />Radio 3
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Inline Radio Buttons</label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1" value="option1" checked />1
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2" value="option2" />2
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline3" value="option3" />3
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label>Selects</label>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Multiple Selects</label>
                                            <select multiple class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <button type="submit" class="btn btn-default">Submit Button</button>
                                        <button type="reset" class="btn btn-default">Reset Button</button>
                                    </form>
                                </div>
                                {/* /.col-lg-6 (nested) */}
                                <div class="col-lg-6">
                                    <h1>Disabled Form States</h1>
                                    <form role="form">
                                        <fieldset disabled>
                                            <div class="form-group">
                                                <label for="disabledSelect">Disabled input</label>
                                                <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input" disabled />
                                            </div>
                                            <div class="form-group">
                                                <label for="disabledSelect">Disabled select menu</label>
                                                <select id="disabledSelect" class="form-control">
                                                    <option>Disabled select</option>
                                                </select>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" />Disabled Checkbox
                                                </label>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Disabled Button</button>
                                        </fieldset>
                                    </form>
                                    <h1>Form Validation States</h1>
                                    <form role="form" class="form-horizontal col-sm-12">
                                      <Input label="Input With Success react" has="success"/>
                                      <Input label="Input with warning" has="warning" />
                                      <Input label="Input with error" has="error" />
                                    </form>
                                    <h1 class="row">Input Groups</h1>
                                    <form role="form">
                                        <div class="form-group input-group">
                                            <span class="input-group-addon">ijij99999999</span>
                                            <input type="text" class="form-control" placeholder="Username" />
                                        </div>
                                        <div class="form-group input-group">
                                            <input type="text" class="form-control" />
                                            <span class="input-group-addon">.00</span>
                                        </div>
                                        <div class="form-group input-group">
                                            <span class="input-group-addon"><i class="fa fa-eur"></i>
                                            </span>
                                            <input type="text" class="form-control" placeholder="Font Awesome Icon" />
                                        </div>
                                        <div class="form-group input-group">
                                            <span class="input-group-addon">$</span>
                                            <input type="text" class="form-control" />
                                            <span class="input-group-addon">.00</span>
                                        </div>
                                        <div class="form-group input-group">
                                            <input type="text" class="form-control" />
                                            <span class="input-group-btn">
                                                <button class="btn btn-default" type="button"><i class="fa fa-search"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                                {/* /.col-lg-6 (nested) */}
                            </div>
                            {/* /.row (nested) */}
                        </div>
                        {/* /.panel-body */}
                    </div>
                    {/* /.panel */}
                </div>
                {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
        </div>

    )
  }
}

export default Forms;
