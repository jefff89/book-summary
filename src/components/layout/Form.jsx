import classes from "./Form.module.css";
import Card from "../UI/card";
import Button from "../UI/Button";
import { useRef, useContext, useState } from "react";
import FavContext from "../store/FavContext";
import { useHistory } from "react-router";
import Input from "../UI/Input";

// const validReducer = (state, action) => {
// if (action.type === "NAME") {
//   return { nameValue: action.val, isValid: action.val.trim().length > 0 };
// }
//   return { nameValue: "", isValid: false };
//   if (action.type === "WRITER") {
//     return { writerValue: action.val, isValid: action.val.trim().length > 0 };
//   }
//   if (action.type === "IMG") {
//     return { imgValue: action.val, isValid: action.val.trim().length > 0 };
//   }
//   if (action.type === "Summary") {
//     return { summaryValue: action.val, isValid: action.val.trim().length > 0 };
//   }
//   return {
//     nameValue: "",
//     writerValue: "",
//     imgValue: "",
//     summaryValue: "",
//     isValid: false,
//   };
// };

const Form = () => {
  // const [stateValid, dispatchValidState] = useReducer(validReducer, {
  //   isValid: null,

  //   nameValue: "",
  //   writerValue: "",
  //   imgValue: "",
  //   summaryValue: "",
  // });
  // const onNameChangeHandler = (event) => {
  //   dispatchValidState({ type: "NAME", val: event.target.value });
  // };
  // const onWriterChangeHandler = (event) => {
  //   dispatchValidState({ type: "WRITER", val: event.target.value });
  // };
  // const onImgChangeHandler = (event) => {
  //   dispatchValidState({ type: "IMG", val: event.target.value });
  // };
  // const onSummaryChangeHandler = (event) => {
  //   dispatchValidState({ type: "SUMMARY", val: event.target.value });
  // };

  const [formIsValid, setFormIsValid] = useState(true);

  // const [nameIsValid, setNameIsValid] = useState(true);
  // const [writerIsValid, setWriterIsValid] = useState(true);
  // const [imgIsValid, setImgIsValid] = useState(true);
  // const [summaryIsValid, setSummaryIsValid] = useState(true);

  const favCtx = useContext(FavContext);
  const history = useHistory();

  const enteredName = useRef();
  const enteredWriter = useRef();
  const enteredImg = useRef();
  const enteredSummary = useRef();

  const ChangeHandler = (event) => {
    if (event.target.value.trim() === 0) {
      setFormIsValid(false);
      // setNameIsValid(false);
      // setWriterIsValid(false);
      // setImgIsValid(false);
      // setSummaryIsValid(false);
    } else {
      setFormIsValid(true);
      // setNameIsValid(true);
      // setWriterIsValid(true);
      // setImgIsValid(true);
      // setSummaryIsValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const values = {
      name: enteredName.current.value,
      writer: enteredWriter.current.value,
      img: enteredImg.current.value,
      summary: enteredSummary.current.value,
    };

    // console.log(stateValid);
    // if (!stateValid.isValid) {
    //   return;
    // }

    if (values.name.trim().length === 0) {
      // setNameIsValid(false);
      setFormIsValid(false);
      enteredName.current.focus();
      return;
    } else {
      // setNameIsValid(true);
      setFormIsValid(true);
    }

    if (values.writer.trim().length === 0) {
      // setWriterIsValid(false);
      setFormIsValid(false);
      enteredWriter.current.focus();
      return;
    } else {
      // setWriterIsValid(true);
      setFormIsValid(true);
    }

    if (values.img.trim().length === 0) {
      // setImgIsValid(false);
      setFormIsValid(false);
      enteredImg.current.focus();
      return;
    } else {
      // setImgIsValid(true);
      setFormIsValid(true);
    }

    if (values.summary.trim().length === 0) {
      // setSummaryIsValid(false);
      setFormIsValid(false);
      enteredSummary.current.focus();
      return;
    } else {
      // setSummaryIsValid(true);
      setFormIsValid(true);
    }

    favCtx.addData({
      name: values.name,
      writer: values.writer,
      img: values.img,
      summary: values.summary,
      id: values.name,
    });

    enteredName.current.value = "";
    enteredWriter.current.value = "";
    enteredImg.current.value = "";
    enteredSummary.current.value = "";
    history.replace("/");
  };

  return (
    <Card className={classes.card}>
      {!formIsValid && (
        <h2
          style={{ color: "tomato", textAlign: "center", paddingTop: "0.5em" }}
        >
          Fill Empty Input
        </h2>
      )}
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          label="Book Name"
          inputs={{
            type: "text",
            id: "name",
            onChange: ChangeHandler,
            ref: enteredName,
          }}
        />
        {/* <div
          className={`${classes["form-control"]} ${
            !nameIsValid && classes.invalid
          }`}
        >
          <label htmlFor="name">Book Name</label>
          <input
            type="text"
            id="name"
            ref={enteredName}
            onChange={ChangeHandler}
          />
        </div> */}
        <Input
          label="Writer"
          inputs={{
            type: "text",
            id: "writer",
            onChange: ChangeHandler,
            ref: enteredWriter,
          }}
        />

        <Input
          label="Image"
          inputs={{
            type: "url",
            id: "image",
            onChange: ChangeHandler,
            ref: enteredImg,
          }}
        />

        <div
          className={classes["form-control"]}
          // className={`${classes["form-control"]} ${
          //   !summaryIsValid && classes.invalid
          // }`}
        >
          <label htmlFor="summary">Add Summary</label>
          <textarea
            id="summary"
            rows="7"
            ref={enteredSummary}
            onChange={ChangeHandler}
            // value={stateValid.summaryValue}
            // onChange={onSummaryChangeHandler}
          ></textarea>
        </div>
        <Button type="submit">Add Summary</Button>
      </form>
    </Card>
  );
};

export default Form;
