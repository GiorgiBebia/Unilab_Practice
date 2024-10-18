import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./ui/Home/Home";
import Category from "./ui/Category/Category";
import DogDetail from "./ui/Dog Detail/DogDetail";
import Login from "./ui/Login/Login";
import Contact from "./ui/Contact/Contact";
import Chat from "./ui/Chat/Chat";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dog/:name" element={<DogDetail />} />
        <Route path="/chat/:name" element={<Chat />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
