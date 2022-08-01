import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
  const { id } = useParams();
  const {
    data: book,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/books/" + id);

  return (
    <div className="book-details">
      {error && <div>{error}</div>}
      {isLoading && <div> Loading...</div>}
      {book && (
        <article>
          <h2>{book.title}</h2>
          <p>Written by {book.author}</p>
          <div>{book.description}</div>
        </article>
      )}
    </div>
  );
};

export default BookDetails;
