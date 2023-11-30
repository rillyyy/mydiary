import React from "react";
import { BotBar } from "../styles/footerstyle";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <BotBar>
      <Link to="/home">{props.children}</Link>
    </BotBar>
  );
};

export default Footer;
