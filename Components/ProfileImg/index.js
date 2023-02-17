import React from "react";
import "./style.scss";
import { List } from "../Dropdown";

function Base(props) {
  const { className, src, children, style } = props;
  return (
    <div
      className={`${className}`}
      style={{ backgroundImage: `url(${src})`, ...style }}
    >
      {children ? children : null}
    </div>
  );
}

export default function ProfileImg(props) {
  return <Base className="profile-img" {...props}></Base>;
}

export function ProfileImgMenu(props) {
  return (
    <List links={props.links}>
      <Base className="profile-img menu" {...props}></Base>
    </List>
  );
}
