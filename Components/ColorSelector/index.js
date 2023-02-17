import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { useState } from "react";

const ColorSelector = (props) => {
  const { color, handleListingChange } = props;
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [hex, setHex] = useState(color);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
    handleListingChange(hex);
  };

  const handleChange = (value, event) => {
    setHex(value.hex);
  };

  const styles = reactCSS({
    default: {
      container: {
        paddingTop: ".5rem",
      },
      color: {
        height: "2.5rem",
        borderRadius: ".2rem",
        background: hex,
        width: "100%",
      },
      swatch: {
        padding: ".5rem",
        background: "#fff",
        borderRadius: ".1rem",
        boxShadow: "0 0 0 .1rem rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
        width: "100%",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    },
  });

  return (
    <div style={styles.container}>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={hex} onChangeComplete={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorSelector;
