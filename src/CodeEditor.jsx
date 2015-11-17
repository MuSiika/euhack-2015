import React from "react/addons"

var brace  = require('brace');
var AceEditor  = require('react-ace');

require('brace/mode/javascript')
require('brace/theme/github')

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

  },

  render: function() {
    return <div>
      <AceEditor mode="javascript" value={this.state.source} onChange={this.code} theme="github" editorProps={{$blockScrolling: true}} />
      <button onClick={this.script}>Test</button>
      <button onClick={this.submit} disabled={this.state.changed}>Ready</button>
    </div>
  }
});
