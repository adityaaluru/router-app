import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <ui>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ui>
    );
  }
}

export default SideBar;
