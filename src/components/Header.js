import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Contacts from "./Contacts";
import Home from "./Home";
import Settings from "./Settings";
import "./header.css";

export default function Header(props) {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="/unhooks">unhooks</NavLink>
          </li>
        </ul>
      </nav>

      <div className="children">{props.children}</div>
    </div>
  );
}
