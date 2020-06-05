import * as React from "react";
import ReactDom from "react-dom";
import { Header } from "./Header";
import { Mainheaderlist } from "./Mainheaderlist";
import "./index.css";
function App() {
  return (
    <div className="header">
      <Header name="CSS-TRICKS" />
      <Mainheaderlist />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
