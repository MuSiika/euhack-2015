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

      for( var i in res ) {
        eval( res[i] );
      }

      /*
      var workers = [];
      for( var i in res ) {
        // Worker scripts can not use window :(
        var worker = "onmessage = function(e) { importScripts('http://localhost:3000/music.js'); " + res[i] + " }";
        console.log( worker );
        // var worker = "onmessage = function(e) { postMessage('msg from worker'); }";
        worker = new Blob([ worker ]);
        worker = window.URL.createObjectURL( worker );
        worker = new Worker( worker );
        workers.push( worker );
        console.log( i );
      }
      for( var i in workers ) {
        console.log( workers[i] );
        workers[ i ].postMessage( null );
      }
      */

      self.setState( { scripts : res });
    } )
  },

  render: function() {
    var scriptBlocks = this.state.scripts.map(function(script, index) {
      console.log(script);
      return (
        <div id={'ace-' + index} key={index} style={{'height': '200px'}}>
        <AceEditor mode="javascript" value={script} theme="github" editorProps={{$blockScrolling: true}} name={'ace-' + index} height={30}/>
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
