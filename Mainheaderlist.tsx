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
        <div className="icon">
          <AssignmentIcon />
        </div>
        <p>Articles</p>
      </div>
      <div className="menu">
        <div className="icon">
          <VideocamIcon />
        </div>
        <p>Videos</p>
      </div>
      <div className="menu">
        <div className="icon">
          <LibraryBooksIcon />
        </div>
        <p>Almanac</p>
      </div>
      <div className="menu">
        <div className="icon">
          <EmailIcon />
        </div>
        <p>Newsletter</p>
      </div>
      <div className="menu">
        <div className="icon">
          <MapIcon />
        </div>
        <p>Guides</p>
      </div>
      <div className="menu">
        <div className="icon">
          <MenuBookIcon />
        </div>
        <p>Books</p>
      </div>
      <div className="menu">
        <div className="icon">
          <AccountCircleIcon />
        </div>
        <p>Account</p>
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
