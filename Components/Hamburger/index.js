import { useState } from "react";
import { List } from "../Dropdown";
import "./style.scss";

export default function Hamburger({ nav, memberLinks }) {
  const [isClicked, setIsClicked] = useState(false);

  const menuButton = () => {
    return (
      <>
        <span className="hb-line"></span>
        <span className="hb-line"></span>
        <span className="hb-line"></span>
      </>
    );
  };

  const clickedButton = () => {
    return (
      <>
        <span className="hb-cross"></span>
        <span className="hb-cross"></span>
      </>
    );
  };

  return (
    <List links={nav}>
      <div className="hb-menu" onClick={(e) => setIsClicked(!isClicked)}>
        {isClicked ? clickedButton() : menuButton()}
      </div>
    </List>
  );
}
