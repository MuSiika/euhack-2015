import React from "react/addons"

var $ = require('jquery') // needed for ajax

export default React.createClass({

  update: function() {
    $.get( '/load', {}, function( res ) {
      console.log( res );
    } )
  },

  render: function() {
    return <div>
      <button onClick={this.update}>Update</button>
    </div>
  }
});
