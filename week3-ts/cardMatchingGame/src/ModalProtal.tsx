import ReactDOM from "react-dom";
import { useEffect } from "react";

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const modalRoot = document.getElementById("modal-root")!;
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [modalRoot, el]);

  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
