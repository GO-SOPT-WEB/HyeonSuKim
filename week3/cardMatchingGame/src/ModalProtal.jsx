import React from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  React.useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [modalRoot, el]);

  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
