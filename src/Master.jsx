import React from "react/addons"

const RaisedButton = require('material-ui/lib/raised-button');

var $ = require('jquery') // needed for ajax
var brace  = require('brace');
var AceEditor  = require('react-ace');

require('brace/mode/javascript')
require('brace/theme/github')


export default React.createClass({

  getInitialState: function() {
    return { scripts : []  };
  },

  update: function() {
    var self = this;
    $.get( '/load', {}, function( res ) {
      // res is list of scripts, let's evaluate them

      var scripts = [];
      for( var i in res ) {
        scripts[ i ] = eval( res[i] );
      }
      
      self.setState( { scripts : res });
    } )
  },

  render: function() {
    var scriptBlocks = this.state.scripts.map(function(script, index) {
      console.log(script);
      return (
        <div key={index}>
        <AceEditor mode="javascript" value={script} theme="github" editorProps={{$blockScrolling: true}} id={index} height={30}/>
      </div>
        
      );
    });
    return <div>
      <div>
        {scriptBlocks}
      </div>
      <RaisedButton onClick={this.update} primary={true} label="Play concert" />
    </div>
  }
});
