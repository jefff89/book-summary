import React from "react";
import { Fragment, useContext } from "react";
import FavContext from "../components/store/FavContext";
import Book from "../components/Books/Book";
import Hero from "../components/layout/Hero";

const BOOKS_DATA = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51EqnTkohBL._SX307_BO1,204,203,200_.jpg",
    name: "The Catcher in the Rye",
    writer: "J. D. Salinger",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere tenetureum quasi enim dignissimos voluptas quod officia qui iusto, sint ex eligendi assumenda nobis dolore ad neque ipsa, doloribus quam?",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71R58qqYzDL.jpg",
    name: "On the Road",
    writer: "Jack Kerouac",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere tenetureum quasi enim dignissimos voluptas quod officia qui iusto, sint ex eligendi assumenda nobis dolore ad neque ipsa, doloribus quam?",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/8117HB7WbvL.jpg",
    name: "The Brothers Karamazov",
    writer: "Fyodor Dostoevsky",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere tenetureum quasi enim dignissimos voluptas quod officia qui iusto, sint ex eligendi assumenda nobis dolore ad neque ipsa, doloribus quam?",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Journey_to_the_End_of_the_Night_cover.jpg/220px-Journey_to_the_End_of_the_Night_cover.jpg",
    name: "Journey to the End of the Night",
    writer: "Celine",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere tenetureum quasi enim dignissimos voluptas quod officia qui iusto, sint ex eligendi assumenda nobis dolore ad neque ipsa, doloribus quam?",
  },
];

const Home = () => {
  const favCtx = useContext(FavContext);

  const join = BOOKS_DATA.concat(favCtx.data);

  return (
    <Fragment>
      <Hero />
      <Book data={join} />
    </Fragment>
  );
};

export default Home;
