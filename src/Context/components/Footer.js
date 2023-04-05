import React from "react";
import SwitchLanguage from "../changers/SwitchLanguage";
import SwitchTheme from "../changers/SwitchTheme";

function Footer({ theme, setTheme }) {
  return (
    <footer>
      <h1>FOOTER</h1>
      <SwitchTheme />
      <SwitchLanguage />
    </footer>
  );
}

export default Footer;
