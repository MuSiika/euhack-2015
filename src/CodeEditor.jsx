import React from "react/addons"

var brace  = require('brace');
var AceEditor  = require('react-ace');

require('brace/mode/javascript')
require('brace/theme/github')

var $ = require('jquery') // needed for ajax

const RaisedButton = require('material-ui/lib/raised-button');

export default React.createClass({

  getInitialState: function() {
    return { source : 'alert("cats!");', changed : false };
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
    $.post( '/save', { 'source' : this.state.source }, function( res ) {
      console.log( res );
    } )
  },

  render: function() {
    return <div>
      <AceEditor mode="javascript" value={this.state.source} onChange={this.code} theme="github" editorProps={{$blockScrolling: true}} />
      <RaisedButton onClick={this.script} primary={true} label="Test" />
      <RaisedButton onClick={this.submit} disabled={this.state.changed} label="Ready" />
    </div>
  }
});
