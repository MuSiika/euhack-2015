import React from "react/addons"

var brace  = require('brace');
var AceEditor  = require('react-ace');

require('brace/mode/javascript')
require('brace/theme/github')

export default React.createClass({

  getInitialState: function() {
    return { source : 'alert("cats!");' };
  },

  code: function( text ) {
    this.setState( { source : text } );
    return false;

  },

  script: function() {
    console.log("scripting!");
    var source = this.state.source;
    console.log( source );
    var f = eval( source );
  },

  render: function() {
    return <div>
      <AceEditor mode="javascript" value={this.state.source} onChange={this.code} theme="github" editorProps={{$blockScrolling: true}} />
      <button onClick={this.script}>Is this ok?</button>
      <button onClick={this.script}>Submit changes</button>
    </div>
  }
});
