import Button from "../UI/Button";
import Card from "../UI/card";
import classes from "./LoginModal.module.css";
import { useState } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

const LoginModal = (props) => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const emailChangeHandler = (event) => {
    setEmailState(event.target.value);
    setEmailIsValid(true);
  };
  const passwordChangeHandler = (event) => {
    setPasswordState(event.target.value);
    setPasswordIsValid(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (emailState.trim().length === 0) {
      setEmailIsValid(false);
      document.getElementById("email").focus();
      return;
    } else {
      setEmailIsValid(true);
    }

    if (passwordState.trim().length < 6) {
      setPasswordIsValid(false);
      document.getElementById("password").focus();

      return;
    } else {
      setPasswordIsValid(true);
    }
    props.loginHandler();
  };

  const inValidEmail = (
    <p className={classes.invalidStates}>Fill empty inputs</p>
  );
  const inValidPassword = (
    <p className={classes.invalidStates}>
      Password should include 6 characters or more
    </p>
  );
  return (
    <Modal>
      <Card className={classes.card}>
        <form className={classes.form} onSubmit={submitHandler}>
          <h2>Please Login</h2>
          {/* {!emailState.isValidEmail && !formIsValid && inValidEmail} */}
          {!emailIsValid && inValidEmail}
          {!passwordIsValid && inValidPassword}

          <Input
            label="E-Mail"
            id="email"
            states={!emailIsValid}
            // states={!emailState.isValidEmail && !formIsValid}
            inputs={{
              // id: "email",
              type: "email",
              value: emailState,
              // value: emailState.emailValue,

              onChange: emailChangeHandler,
            }}
          />

          <Input
            label="Password"
            id="password"
            states={!passwordIsValid}
            inputs={{
              // id: "password",
              type: "password",
              value: passwordState,
              onChange: passwordChangeHandler,
            }}
          />

          <Button type="submit">LOGIN</Button>
        </form>
      </Card>
    </Modal>
  );
};

export default LoginModal;

// import Button from "../UI/Button";
// import Card from "../UI/card";
// import classes from "./LoginModal.module.css";
// import { useState, useReducer, useEffect } from "react";
// import Input from "../UI/Input";
// import Modal from "../UI/Modal";

// const wholeReducer = (state, action) => {
//   if (action.type === "EMAIL") {
//     return {
//       emailValue: action.input,
//       isValidEmail: action.input.trim().length > 0,
//     };
//   }
//   if (action.type === "PASSWORD") {
//     return {
//       passwordValue: action.input,
//       isValidPassword: action.input.trim().length > 5,
//     };
//   }

//   return {
//     emailValue: "",
//     passwordValue: "",
//     isValidEmail: false,
//     isValidPassword: false,
//     isValid: (isValidEmail, isValidPassword) => {
//       return isValidEmail && isValidPassword;
//     },
//   };
// };

// const LoginModal = (props) => {
//   //   const [emailState, setEmailState] = useState("");
//   //   const [passwordState, setPasswordState] = useState("");
//   //   const [emailIsValid, setEmailIsValid] = useState(true);
//   //   const [passwordIsValid, setPasswordIsValid] = useState(true);
//   // const [formIsValid, setFormIsValid] = useState(true);

//   const [wholeState, dispatchWhole] = useReducer(wholeReducer, {
//     emailValue: "",
//     passwordValue: "",
//     isValidEmail: null,
//     isValidPassword: null,
//     isValid: () => {},
//   });

//   const { isValidEmail } = wholeState;
//   const { isValidPassword } = wholeState;

//   const emailChangeHandler = (event) => {
//     dispatchWhole({ type: "EMAIL", input: event.target.value });
//   };

//   const passwordChangeHandler = (event) => {
//     dispatchWhole({ type: "PASSWORD", input: event.target.value });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     if (!isValidEmail) {
//       document.getElementById("email").focus();
//       return;
//     } else if (!isValidPassword) {
//       document.getElementById("password").focus();
//       return;
//     }

//     props.loginHandler();
//   };

//   const inValidEmail = (
//     <p className={classes.invalidStates}>Fill empty inputs</p>
//   );
//   const inValidPassword = (
//     <p className={classes.invalidStates}>
//       Password should include 6 characters or more
//     </p>
//   );
//   return (
//     <Modal>
//       <Card className={classes.card}>
//         <form className={classes.form} onSubmit={submitHandler}>
//           <h2>Please Login</h2>
//           {/* {!emailState.isValidEmail && !formIsValid && inValidEmail} */}
//           {!wholeState.isValidEmail && inValidEmail}
//           {!wholeState.isValidPassword && inValidPassword}

//           <Input
//             label="E-Mail"
//             id="email"
//             states={!wholeState.isValidEmail}
//             // states={!emailState.isValidEmail && !formIsValid}
//             inputs={{
//               // id: "email",
//               type: "email",
//               value: wholeState.emailValue,
//               // value: emailState.emailValue,

//               onChange: emailChangeHandler,
//             }}
//           />

//           <Input
//             label="Password"
//             id="password"
//             states={!wholeState.isValidPassword}
//             inputs={{
//               // id: "password",
//               type: "password",
//               value: wholeState.passwordValue,
//               onChange: passwordChangeHandler,
//             }}
//           />

//           <Button type="submit">LOGIN</Button>
//         </form>
//       </Card>
//     </Modal>
//   );
// };

// export default LoginModal;
