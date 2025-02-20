import React from "react";
import { Links } from "../cardslink/CardsLink";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Links />
      <p className="copyright">Copyright, SportSee 2020</p>
    </div>
  );
};

export default Sidebar;
