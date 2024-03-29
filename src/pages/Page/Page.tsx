import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import "./page.css";
import { getBooks } from "../../state/books/actions";
import BookCard from "../../components/BookCard/BookCard";
import { Book } from "../../state/books/types";
import { booksSelector } from "../../state/books/selectors";
import Search from "../../components/Search/search";

const Page: React.FC = () => {
  const books = useSelector(booksSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
    return () => {};
  }, []);

  const createLogoSVG = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF"
        />
        <path
          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
          fill="#555AB9"
        />
        <path
          d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
          fill="#91BAF8"
        />
      </g>
    </svg>
  );
  const bookList = books.map(({ id, thumbnail, title, description }: Book) => (
    <BookCard
      key={id}
      id={id}
      title={title}
      description={description}
      thumbnail={thumbnail}
    />
  ));

  const search = (searchTerm: string) => {
    dispatch(getBooks(searchTerm));
  };

  return (
    <article>
      <Header logoSVG={createLogoSVG()} title="Rrepo">
        <div className="example-links" />
      </Header>
      <section>
        <h2>Books app</h2>
        <Search
          onSearch={(searchTerm: string) => {
            search(searchTerm);
          }}
        />
        <div className="books">{bookList}</div>
      </section>
    </article>
  );
};

export default Page;
