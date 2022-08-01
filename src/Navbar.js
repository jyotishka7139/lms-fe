import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Library Management System</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/addUser"
          //   style={{
          //     color: "white",
          //     backgroundColor: "#f1356d",
          //     borderRadius: "8px",
          //   }}
        >
          Add New User
        </Link>
        <Link
          to="/addBook"
          //   style={{
          //     color: "white",
          //     backgroundColor: "#f1356d",
          //     borderRadius: "8px",
          //   }}
        >
          Add New Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
