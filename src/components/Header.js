import React from "react";
import { TopBar } from "../styles/headerstyle";

const Header = () => {
  return (
    <TopBar>
      <button>
        <img src="images/bt_list.svg" alt="" />
      </button>
      <h2>타이틀</h2>
      <button>
        <img src="images/bt_login.svg" alt="" />
      </button>
    </TopBar>
  );
};

export default Header;
