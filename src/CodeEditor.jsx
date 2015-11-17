import React from "react/addons"

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var brace  = require('brace');
var AceEditor  = require('react-ace');

require('brace/mode/javascript')
require('brace/theme/github')

var $ = require('jquery') // needed for ajax

const RaisedButton = require('material-ui/lib/raised-button');
const CircularProgress = require('material-ui/lib/circular-progress');
const DropDownMenu = require('material-ui/lib/drop-down-menu');

const Menu = require('material-ui/lib/menus/menu');
const MenuItem = require('material-ui/lib/menus/menu-item');
const MenuDivider = require('material-ui/lib/menus/menu-divider');

const instruments = require('./external/instruments.js');

export default React.createClass({

  getInitialState: function() {
    return { source : 'addNote("C");\nplay();', changed : false, submitting: "none", instrument : 1  };
  },

  code: function( text ) {
    this.setState( { source : text, changed: true } );
    return false;

  },

  _source : function( source ) {
    source = "setInstrument(" + this.state.instrument + ");\n" + source;
    source += "\nreset();";
    return source;
  },

  setInstrument: function(event, index, item ) {
      this.setState( { instrument : item.val } );
  },

  script: function() {

    var source = this.state.source;
    source = this._source( source );

    eval( source );
    this.setState( { changed : false } )
  },

  submit: function() {
    this.setState( { submitting: "inline" } );

    var source = this.state.source;
    source = this._source( source );

    var self = this;

    $.post( '/save', { 'source' : source }, function( res ) {
      console.log( res );
      // sort of hack
      setTimeout( function() {
        self.setState( { submitting: "none" } );
      } , 1500 );
    } )
  },

  render: function() {

    return <div>

      <div>
        <DropDownMenu onChange={this.setInstrument} displayMember={"name"} valueMember={"val"} menuItems={instruments} />
      </div>

      <div style={{'marginTop': '10px'}}>
        <AceEditor mode="javascript" value={this.state.source} onChange={this.code} theme="github" editorProps={{$blockScrolling: true}} />
      </div>
      <div style={{'marginTop': '10px'}}>
        <RaisedButton onClick={this.script} primary={true} label="Test" />
        <RaisedButton onClick={this.submit} disabled={this.state.changed} label="Ready" />
        <CircularProgress mode="indeterminate" style={{display: this.state.submitting }} />
      </div>

    </div>
  }
});
