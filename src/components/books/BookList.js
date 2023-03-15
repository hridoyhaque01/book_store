import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import BookListItem from "./BookListItem";

export default function BookList() {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  const { search, featured } = useSelector((state) => state.filter);

  //decide what to render

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (!isLoading && isError) {
    content = <div className="error">There was an error occurred!</div>;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <div className="notFound">No Books Found!</div>;
  }

  const searchedFilter = (book) => {
    if (search.trim().length > 0) {
      return book.name.toLowerCase().includes(search);
    } else {
      return true;
    }
  };

  const featuredFilter = (book) => {
    if (featured === "featured") {
      return book.featured;
    } else {
      return true;
    }
  };

  if (!isLoading && !isError && books?.length > 0) {
    const filteredBooks = books.filter(searchedFilter).filter(featuredFilter);

    if (filteredBooks.length > 0) {
      content = filteredBooks.map((book) => (
        <BookListItem key={book.id} book={book} />
      ));
    } else {
      content = <div className="notFound">No result Found!</div>;
    }
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
}
