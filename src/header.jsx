import React from "react/addons"
import { Link } from "react-router"

export default React.createClass({
  render: function() {
    return <div id="topmenu" className="ui pointing menu">
      <div className="ui page grid">
        <div className="column" style={{paddingBottom: 0}}>
          <Link className="title item" to="/">
            <b>μsiika</b>
          </Link>
          <Link className="item" to="/">
            Personal
          </Link>
          <Link className="item" to="/master">
            Consert
          </Link>
          <Link className="item" to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  }
});
