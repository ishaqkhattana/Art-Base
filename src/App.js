import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from "./components/Nav";
import { SearchBar } from "./components/SearchBar";
import { Events } from "./components/Events";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<SearchBar />} />
        </Routes>
        <Routes>
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
