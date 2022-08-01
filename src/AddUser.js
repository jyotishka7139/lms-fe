import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("jyotishka");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSUbmit = (event) => {
    event.preventDefault();
    const book = { name, email, number };

    setIsLoading(true);

    fetch("http://localhost:8000/books", {
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
      <h2>Add a new user</h2>
      <form onSubmit={handleSUbmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(input) => setName(input.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(input) => setEmail(input.target.value)}
        />
        <label>Number:</label>
        <input
          type="number"
          required
          value={number}
          onChange={(input) => setEmail(input.target.value)}
        />
        {isLoading ? (
          <button>Adding user...</button>
        ) : (
          <button>Add user</button>
        )}
        {/* <p>{title}</p>
        <p>{description}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
};

export default AddUser;
