import BookList from "./BookList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: books,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/add/inlibrary");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {books && <BookList books={books} title="All Books" />}
    </div>
  );
};

export default Home;
