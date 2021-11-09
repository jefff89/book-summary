import classes from "./Form.module.css";
import Card from "../UI/card";
import Button from "../UI/Button";
import { useRef, useContext, useState } from "react";
import FavContext from "../store/FavContext";
import { useHistory } from "react-router";
import Input from "../UI/Input";

const Form = () => {
  const [formIsValid, setFormIsValid] = useState(true);

  const favCtx = useContext(FavContext);
  const history = useHistory();

  const enteredName = useRef();
  const enteredWriter = useRef();
  const enteredImg = useRef();
  const enteredSummary = useRef();

  const ChangeHandler = (event) => {
    if (event.target.value.trim() === 0) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
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

    if (values.name.trim().length === 0) {
      setFormIsValid(false);
      enteredName.current.focus();
      return;
    } else {
      setFormIsValid(true);
    }

    if (values.writer.trim().length === 0) {
      setFormIsValid(false);
      enteredWriter.current.focus();
      return;
    } else {
      setFormIsValid(true);
    }

    if (values.img.trim().length === 0) {
      setFormIsValid(false);
      enteredImg.current.focus();
      return;
    } else {
      setFormIsValid(true);
    }

    if (values.summary.trim().length === 0) {
      setFormIsValid(false);
      enteredSummary.current.focus();
      return;
    } else {
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

        <div className={classes["form-control"]}>
          <label htmlFor="summary">Add Summary</label>
          <textarea
            id="summary"
            rows="7"
            ref={enteredSummary}
            onChange={ChangeHandler}
          ></textarea>
        </div>
        <Button type="submit">Add Summary</Button>
      </form>
    </Card>
  );
};

export default Form;
