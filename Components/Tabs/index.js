import { useState } from "react";
import "./style.scss";

export default function Tabs(props) {
  const [selected, setSelected] = useState(0);
  const { tabs, handleTabSelect } = props;
  const handleSelection = (index) => {
    selected !== index && setSelected(index);
    handleTabSelect(index);
  };
  return (
    <div className="tabs-container">
      {tabs.map((text, index) => (
        <div
          key={index}
          className={`tab-gradient${selected === index ? " selected" : ""}`}
          onClick={() => handleSelection(index)}
        >
          <div className="tab">
            <p>{text}</p>
          </div>
        </div>
      ))}
      <div className="tab-border"></div>
    </div>
  );
}
