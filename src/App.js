import logo from "./logo.svg";
import "./App.css";
import ListUser from "./components/ListUser";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <h1 className="text-success">React Project</h1>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="addUser" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
