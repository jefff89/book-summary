import Button from "../UI/Button";
import Card from "../UI/card";
import classes from "./LoginModal.module.css";
// import { useState } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import useInput from "../../hooks/use-input";

const LoginModal = (props) => {
  const {
    value: emailState,
    valueIsValid: emailIsValid,
    hasError: invalidEmail,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    setTouch: emailIsTouched,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const {
    value: passwordState,
    valueIsValid: passwordIsValid,
    hasError: invalidPassword,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    setTouch: passwordIsTouched,
  } = useInput((value) => value.trim().length >= 6);

  // const [emailState, setEmailState] = useState("");
  // const [emailIsTouched, setEmailIsTouched] = useState(false);
  // const emailIsValid = emailState.trim() !== "" && emailState.includes("@");
  // const invalidEmail = !emailIsValid && emailIsTouched;

  // const [passwordState, setPasswordState] = useState("");
  // const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  // const passwordIsValid = passwordState.trim().length >= 6;
  // const invalidPassword = !passwordIsValid && passwordIsTouched;

  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  // const emailChangeHandler = (event) => {
  //   setEmailState(event.target.value);
  // };
  // const emailBlurHandler = () => {
  //   setEmailIsTouched(true);
  // };

  // const passwordChangeHandler = (event) => {
  //   setPasswordState(event.target.value);
  // };
  // const passwordBlurHandler = () => {
  //   setPasswordIsTouched(true);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    // setEmailIsTouched(true);
    // setPasswordIsTouched(true);
    emailIsTouched();
    passwordIsTouched();

    if (!formIsValid) {
      return;
    }

    props.loginHandler();
  };

  const email = (
    <p className={classes["error-text"]}>
      {emailState.trim().length === 0
        ? "Enter Your Email"
        : "Email Should Include @"}
    </p>
  );
  const password = (
    <p className={classes["error-text"]}>
      Password should include 6 characters or more
    </p>
  );
  return (
    <Modal>
      <Card className={classes.card}>
        <form className={classes.form} onSubmit={submitHandler}>
          <h2>Please Login</h2>

          {invalidEmail && email}
          {invalidPassword && password}

          <Input
            label="E-Mail"
            id="email"
            states={invalidEmail}
            inputs={{
              type: "email",
              value: emailState,
              onBlur: emailBlurHandler,
              onChange: emailChangeHandler,
            }}
          />

          <Input
            label="Password"
            id="password"
            states={invalidPassword}
            inputs={{
              type: "password",
              value: passwordState,
              onChange: passwordChangeHandler,
              onBlur: passwordBlurHandler,
            }}
          />

          <Button type="submit">LOGIN</Button>
        </form>
      </Card>
    </Modal>
  );
};

export default LoginModal;
