import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Home from "./components/Home";
import Settings from "./components/Settings";
import { Routes, Route } from "react-router-dom";
import Unhooks from "./components/Unhooks";

function App() {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/unhooks" element={<Unhooks />} />
      </Routes>
    </Header>
  );
}

export default App;
