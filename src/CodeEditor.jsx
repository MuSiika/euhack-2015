import React from "react/addons"

var brace  = require('brace');
var AceEditor  = require('react-ace');

require('brace/mode/javascript')
require('brace/theme/github')

var $ = require('jquery') // needed for ajax

export default React.createClass({

  getInitialState: function() {
    return { source : 'addNote("C"); play(); reset();', changed : false };
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
      <button onClick={this.script}>Test</button>
      <button onClick={this.submit} disabled={this.state.changed}>Ready</button>
    </div>
  }
});
