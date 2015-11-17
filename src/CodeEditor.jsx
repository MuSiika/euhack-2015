import React from "react/addons"

var brace  = require('brace');
var AceEditor  = require('react-ace');

require('brace/mode/javascript')
require('brace/theme/github')

var $ = require('jquery') // needed for ajax

const RaisedButton = require('material-ui/lib/raised-button');
const CircularProgress = require('material-ui/lib/circular-progress');

export default React.createClass({

  getInitialState: function() {
    return { source : 'addNote("C"); play(); reset();', changed : false, submitting: "none" };
  },

  code: function( text ) {
    this.setState( { source : text, changed: true } );
    return false;

  },

  script: function() {
    var source = this.state.source;
    console.log( source );
    eval( source );
    this.setState( { changed : false } )
  },

  submit: function() {
    this.setState( { submitting: "inline" } );
    var self = this;
    $.post( '/save', { 'source' : this.state.source }, function( res ) {
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
        <AceEditor mode="javascript" value={this.state.source} onChange={this.code} theme="github" editorProps={{$blockScrolling: true}} />
      </div>
      <div style={{'margin-top': '10px'}}>
        <RaisedButton onClick={this.script} primary={true} label="Test" />
        <RaisedButton onClick={this.submit} disabled={this.state.changed} label="Ready" />
        <CircularProgress mode="indeterminate" style={{display: this.state.submitting }} />

      </div>
    </div>
  }
});
