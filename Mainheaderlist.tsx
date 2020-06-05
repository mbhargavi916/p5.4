import * as React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import VideocamIcon from "@material-ui/icons/Videocam";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import EmailIcon from "@material-ui/icons/Email";
import MapIcon from "@material-ui/icons/Map";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import "./Mainheaderlist.css";
/*export function Mainheaderlist(props) {
  return <div>{props.name}</div>;

function list() {
  return (
  <div>
     <Mainheaderlist name="Articles" />
      <Mainheaderlist name="Vedios" />
      <Mainheaderlist name="Almanac" />
      <Mainheaderlist name="Newsletter" />
      <Mainheaderlist name="Guides" />
      <Mainheaderlist name="Books" />
      <Mainheaderlist name="Account" />
    </div>*/

export function Mainheaderlist() {
  return (
    <div className="mainlist">
      <div className="menu">
        <a href="https://css-tricks.com/archives/">
          <div className="icon">
            <AssignmentIcon />
          </div>
          <p>Articles</p>
        </a>
      </div>

      <div className="menu">
        <a href="https://css-tricks.com/video-screencasts/">
          <div className="icon">
            <VideocamIcon />
          </div>
          <p>Videos</p>
        </a>
      </div>
      <div className="menu">
        <a href="https://css-tricks.com/almanac/">
          <div className="icon">
            <LibraryBooksIcon />
          </div>
          <p>Almanac</p>
        </a>
      </div>
      <div className="menu">
        <a href="https://css-tricks.com/newsletters/">
          <div className="icon">
            <EmailIcon />
          </div>
          <p>Newsletter</p>
        </a>
      </div>
      <div className="menu">
        <a href="https://css-tricks.com/guides/">
          <div className="icon">
            <MapIcon />
          </div>
          <p>Guides</p>
        </a>
      </div>
      <div className="menu">
        <a href="https://css-tricks.com/books/">
          <div className="icon">
            <MenuBookIcon />
          </div>
          <p>Books</p>
        </a>
      </div>
      <div className="menu">
        <a href="https://css-tricks.com/product/membership/">
          <div className="icon">
            <AccountCircleIcon />
          </div>
          <p>Account</p>
        </a>
      </div>
      <div>
        <input type="box" value="e.g flex box" />
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
