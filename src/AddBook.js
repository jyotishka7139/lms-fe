import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSUbmit = (event) => {
    event.preventDefault();
    const book = { name: title, Author: author };

    setIsLoading(true);

    fetch("http://localhost:3000/add/book", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(book),
    }).then(() => {
      setIsLoading(false);
      //   alert("new book added", []);
      navigate(-1);
    });
  };

  return (
    <div className="add-book">
      <h2>Add a new book</h2>
      <form onSubmit={handleSUbmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(input) => setTitle(input.target.value)}
        />
        <label>Author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(input) => setAuthor(input.target.value)}
        />
        {/* <label>Book description:</label>
        <textarea
          required
          value={description}
          onChange={(input) => setDescription(input.target.value)}
        ></textarea>
        <label>Book author:</label>
        <select
          value={author}
          onChange={(input) => setAuthor(input.target.value)}
        >
          <option value="jyotishka">jyotishka</option>
          <option value="dasgupta">dasgupta</option>
        </select> */}
        {isLoading ? (
          <button>Adding book...</button>
        ) : (
          <button>Add book</button>
        )}
        {/* <p>{title}</p>
        <p>{description}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
};

export default AddBook;
