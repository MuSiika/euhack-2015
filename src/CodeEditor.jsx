import React from "react/addons"

var brace  = require('brace');
var AceEditor  = require('react-ace');

require('brace/mode/javascript')
require('brace/theme/github')

export default React.createClass({
  render: function() {
    return <div>
      <AceEditor mode="javascript" theme="github" editorProps={{$blockScrolling: true}} />
    </div>
  }
});
