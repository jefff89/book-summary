import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onDoingSth} />;
};
const ModalUI = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const portalElement = document.getElementById("overLays");

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onDoingSth={props.onDoingSth} />, portalElement)}
      {createPortal(<ModalUI>{props.children}</ModalUI>, portalElement)}
    </Fragment>
  );
};

export default Modal;
