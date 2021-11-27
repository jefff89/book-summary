import classes from "./Form.module.css";
import Card from "../UI/card";
import Button from "../UI/Button";
import { useContext } from "react";
import FavContext from "../store/FavContext";
import { useNavigate } from "react-router";
import Input from "../UI/Input";
import useInput from "../../hooks/use-input";

const notEmpty = (value) => value.trim() !== "";
const Form = () => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: invalidName,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    setTouch: enteredNameIsTouched,
  } = useInput(notEmpty);

  const {
    value: enteredWriter,
    valueIsValid: enteredWriterIsValid,
    hasError: invalidWriter,
    valueChangeHandler: writerChangeHandler,
    valueBlurHandler: writerBlurHandler,
    setTouch: enteredWriterIsTouched,
  } = useInput(notEmpty);

  const {
    value: enteredImage,
    valueIsValid: enteredImageIsValid,
    hasError: invalidImage,
    valueChangeHandler: imageChangeHandler,
    valueBlurHandler: imageBlurHandler,
    setTouch: enteredImageIsTouched,
  } = useInput(notEmpty);

  const {
    value: enteredSummary,
    valueIsValid: enteredSummaryIsValid,
    hasError: invalidSummary,
    valueChangeHandler: summaryChangeHandler,
    valueBlurHandler: summaryBlurHandler,
    setTouch: enteredSummaryIsTouched,
  } = useInput(notEmpty);

  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredWriterIsValid &&
    enteredImageIsValid &&
    enteredSummaryIsValid
  ) {
    formIsValid = true;
  }

  const favCtx = useContext(FavContext);
  const history = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    enteredNameIsTouched();
    enteredWriterIsTouched();
    enteredImageIsTouched();
    enteredSummaryIsTouched();
    if (!formIsValid) {
      return;
    }
    const values = {
      name: enteredName,
      writer: enteredWriter,
      img: enteredImage,
      summary: enteredSummary,
    };

    favCtx.addData({
      name: values.name,
      writer: values.writer,
      img: values.img,
      summary: values.summary,
      id: values.name,
    });

    history.replace("/");
  };

  return (
    <Card className={classes.card}>
      {invalidName && <p className={classes["error-text"]}>Enter Book Name</p>}
      {invalidWriter && (
        <p className={classes["error-text"]}>Enter Writer Name</p>
      )}
      {invalidImage && <p className={classes["error-text"]}>Add Image Url</p>}
      {invalidSummary && <p className={classes["error-text"]}>Add Summary</p>}
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          label="Book Name"
          states={invalidName}
          inputs={{
            type: "text",
            id: "name",
            onChange: nameChangeHandler,
            value: enteredName,
            onBlur: nameBlurHandler,
          }}
        />

        <Input
          label="Writer"
          states={invalidWriter}
          inputs={{
            type: "text",
            id: "writer",
            value: enteredWriter,

            onChange: writerChangeHandler,
            onBlur: writerBlurHandler,
          }}
        />

        <Input
          label="Image"
          states={invalidImage}
          inputs={{
            type: "url",
            id: "image",
            value: enteredImage,
            onChange: imageChangeHandler,
            onBlur: imageBlurHandler,
          }}
        />

        <div
          className={`${classes["form-control"]} ${
            invalidSummary && classes.invalid
          }`}
        >
          <label htmlFor="summary">Add Summary</label>
          <textarea
            id="summary"
            rows="7"
            value={enteredSummary}
            onChange={summaryChangeHandler}
            onBlur={summaryBlurHandler}
          ></textarea>
        </div>
        <Button type="submit">Add Summary</Button>
      </form>
    </Card>
  );
};

export default Form;
