import classes from "./Input.module.css";
// import { forwardRef } from "react";

const Input = (props) => {
  //   const Input = forwardRef((props, ref) => {
  return (
    <div
      className={`${classes["form-control"]} ${
        props.states && classes.invalid
      }`}
    >
      <label htmlFor={props.inputs.id}>{props.label}</label>
      <input id={props.id} {...props.inputs} />
      {/* <input ref={ref} id={props.id} {...props.inputs} /> */}
    </div>
  );
};

export default Input;
