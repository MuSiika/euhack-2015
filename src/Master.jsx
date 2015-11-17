import React from "react/addons"

const RaisedButton = require('material-ui/lib/raised-button');

var $ = require('jquery') // needed for ajax

export default React.createClass({

  update: function() {
    $.get( '/load', {}, function( res ) {
      // res is list of scripts, let's evaluate them
      var scripts = [];
      for( var i in res ) {
        scripts[ i ] = eval( res[i] );
      }
    } )
  },

  render: function() {
    return <div>
      <RaisedButton onClick={this.update} primary={true} label="Play concert" />
    </div>
  }
});
