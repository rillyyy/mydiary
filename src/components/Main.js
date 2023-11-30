import React from "react";
import { Contents } from "../styles/mainstyle";

const Main = props => {
  console.log(props);
  return <Contents>{props.children}</Contents>;
};

export default Main;
