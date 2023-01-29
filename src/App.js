import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Report from "./components/Report";
import Forms from "./components/Forms";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Forms />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/relatorio" element={<Report />}></Route>
      </Routes>
    </div>
  );
}
