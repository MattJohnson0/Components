import React, { useState } from "react";
import "./style.scss";

function Dropdown(props) {
  const { children, isOpen } = props;
  return isOpen ? <ul>{children}</ul> : null;
}

function List(props) {
  const { links, children } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleClick = () => setDropdownOpen(!dropdownOpen);

  return (
    <div onClick={() => handleClick()} className="dropdown-parent">
      {children}
      <Dropdown isOpen={dropdownOpen}>
        {links.map((link, index) => (
          <ListItem link={link} key={index}></ListItem>
        ))}
      </Dropdown>
    </div>
  );
}

function ListItem(props) {
  const {
    link: { href, text, handleClick },
  } = props;
  return (
    <li>
      <a href={href} onClick={() => handleClick()}>
        {text}
      </a>
    </li>
  );
}

function MultiSelect(props) {
  const { options } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleClick = () => setDropdownOpen(!dropdownOpen);

  return (
    <div onClick={() => handleClick()} className="select dropdown-parent">
      <p>
        Owner
        <span className="chevron"></span>
      </p>
      <Dropdown isOpen={dropdownOpen}>
        {options.map((option, index) => (
          <SelectItem option={option} key={index}></SelectItem>
        ))}
      </Dropdown>
    </div>
  );
}

function SelectItem(props) {
  const {
    option: { href, text, handleClick },
  } = props;
  return (
    <li>
      <a href={href} onClick={() => handleClick()}>
        {text}
      </a>
    </li>
  );
}

export { List, MultiSelect };
