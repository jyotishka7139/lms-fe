import { Link } from "react-router-dom";

const BookList = ({ books, title }) => {
  return (
    <div className="book-list">
      <h2>{title}</h2>
      {books.map((book) => (
        // <Link to={`/books/${book.id}`}>
        <div className="book-preview" key={book._id}>
          <h2>{book.name}</h2>
          <p>Written by {book.Author}</p>
          {/* <p>{book._id}</p> */}
          {/* <button onClick={() => handleDelete(books.id)}>delete book</button> */}
        </div>
        // </Link>
      ))}
    </div>
  );
};

export default BookList;
