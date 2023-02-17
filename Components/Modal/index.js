import { useState, useEffect } from "react";
import "./style.scss";
export default function Modal(props) {
  const { children, modalVisibility, closeModal } = props;

  useEffect(() => {
    modalVisibility
      ? (document.getElementsByTagName("body")[0].style = "overflow: hidden")
      : (document.getElementsByTagName("body")[0].style = "");
  }, [modalVisibility]);

  const handleClose = (event) => {
    if (event.target.className === "modal-container") {
      closeModal();
    }
  };

  return modalVisibility ? (
    <div className="modal-container" onClick={(e) => handleClose(e)}>
      <div className="modal">{children}</div>
    </div>
  ) : null;
}
