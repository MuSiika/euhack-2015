import React from "react/addons"

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
      <button onClick={this.update}>Update</button>
    </div>
  }
});
