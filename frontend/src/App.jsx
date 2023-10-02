import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing component</h1>} />
          <Route path="/add" element={<h1>Add Product component</h1>} />
          <Route path="/update" element={<h1>Update Product component</h1>} />
          <Route path="/logout" element={<h1>Logout component</h1>} />
          <Route path="/profile" element={<h1>Profile component</h1>} />
        </Routes>
        {/* <h1>E-Dashboard</h1> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
