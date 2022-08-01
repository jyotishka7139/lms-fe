import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from "./AddBook";
import AddUser from "./AddUser";
import BookDetails from "./BookDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addUser" element={<AddUser />} />
            <Route exact path="/addBook" element={<AddBook />} />
            <Route exact path="/books/:id" element={<BookDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
