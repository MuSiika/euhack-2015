import React from "react/addons"
import { Link } from "react-router"

export default React.createClass({
  render: function() {
    return <div className="ui pointing menu">
      <div className="ui page grid">
        <div className="column" style={{paddingBottom: 0}}>
          <div className="title item">
            <b>MuSiika</b>
          </div>
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/about">
            About
          </Link>
          <Link className="item" to="/master">
            Master UI
          </Link>
        </div>
      </div>
    </div>
  }
});
