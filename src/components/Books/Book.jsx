import BookItem from "./BookItem";
import classes from "./Book.module.css";

const Book = (props) => {
  const mapping = props.data.map((book) => {
    return (
      <BookItem
        key={book.name}
        id={book.name}
        img={book.img}
        name={book.name}
        writer={book.writer}
        summary={book.summary}
      />
    );
  });

  return <ul className={classes.book}>{mapping}</ul>;
};

export default Book;
