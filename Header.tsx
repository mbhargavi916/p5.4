import * as React from "react";
import logo from "./logo.jpg";
import "./Header.css";
export function Header(props) {
  return (
    <div className="title">
      <a href="https://css-tricks.com/">
        <img
          className="logoimage"
          src={logo}
          alt="image"
          width="25px"
          height="25px"
          color="orangered"
        />
        {props.name}
      </a>
    </div>
  );
}
